<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
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

    function updateTask(Request $request, $tid){
		$user = $this->user();
		$task = $user->tasks()->where('task_id', '=', $tid);
		$task->update($request->all());

		$tasks = $user->tasks()->where('task_id', '=', $tid)->with(['creator', 'users', 'account', 'audit', 'audit.user'])->get();
		return response()->json([
			'tasks' => $tasks
		]);
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
