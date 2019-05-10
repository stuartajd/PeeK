<?php

namespace App\Http\Controllers;

use App\Models\Audit;
use App\Notifications\TaskUpdated;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\TaskBreakdown;
use App\Models\User;

class TaskController extends Controller
{
    //
    function getUserTasks(){
	    $user = $this->user();
        $tasks = $user->tasks()->with(['creator', 'account'])->get();

        return response()->json([
            'tasks' => $tasks
        ]);
    }

    function getTask($tid){
    	$task = Task::where('id', $tid)->with(['creator', 'users', 'account', 'audit', 'audit.user'])->first();
        return response()->json($task);
    }

    function getBreakdown($tid){
	    $task = Task::where('id', $tid)->with(['breakdown'])->first();
	    return response()->json($task);
    }

    function createBreakdown(Request $request, $tid){
	    $request->validate([
		    'title' => 'required',
		    'description' => 'required',
		    'status' => 'required'
	    ]);

	    $req = $request->all();
	    $req['company_id'] = $this->user()->company->id;
	    $req['created_by'] = $this->user()->id;
	    $req['task_id'] = $tid;

	    $breakdown = new TaskBreakdown($req);
	    $breakdown->save();

	    return $this->getBreakdown($tid);
    }

    function updateTask(Request $request, $tid){
		$user = $this->user();

	    $task = Task::where('id', $tid)->with(['creator', 'users', 'account', 'audit', 'audit.user'])->first();
	    $update = $request->all();
	    if(isset($update['due_date'])){
		    $update['due_date'] = date("Y-m-d H:i", strtotime($update['due_date']));

	    }
	    if(isset($update['users'])){
	    	$task->users()->detach();

		    foreach($request->get('users') as $user){
			    $saveUser = User::where('id', $user['id'])->first();
			    $task->users()->attach($saveUser);
		    }
	    }

	    $audit = new Audit([
	    	'user_id'=>$user->id,
		    'company_id'=>$user->company->id,
		    'audit'=>'Task was updated'
	    ]);
	    $task->audit()->save($audit);

	    $task->update($update);

		if($task->status != 'complete'){
			$task->creator->notify(new TaskUpdated($task->creator, $task));
			// Send alert to all users that are assigned to the card
			foreach($task->users as $auser){
				$auser->notify(new TaskUpdated($auser, $task));
			}
		}

	    $task = Task::where('id', $tid)->with(['creator', 'users', 'account', 'audit', 'audit.user'])->first();
	    return response()->json($task);
	}

	/**
	 * Create a new task
	 *
	 * @param Request $request
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function createTask(Request $request){
		$request->validate([
			'account_id' => 'required',
			'title' => 'required',
			'description' => 'required',
			'due_date' => 'required',
			'priority' => 'required',
			'users' => 'required'
		]);

		$task = new Task();
		$task->due_date = date("Y-m-d H:i", strtotime($request->get('due_date')));
		$task->account_id = $request->get('account_id');
		$task->company_id = $this->user()->company->id;
		$task->created_by = $this->user()->id;
		$task->title = $request->get('title');
		$task->description = $request->get('description');
		$task->priority = $request->get('priority');
		$task->save();

		foreach($request->get('users') as $user){
			$saveUser = User::where('id', $user['id'])->first();
			$task->users()->attach($saveUser);
		}

    	return response()->json($task);
	}
}
