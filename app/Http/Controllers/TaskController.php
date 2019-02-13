<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;


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
        $user = $this->user();
        $tasks = $user->tasks()->where('task_id', '=', $tid)->with(['creator', 'users', 'account', 'audit', 'audit.user'])->get();

        return response()->json([
            'tasks' => $tasks
        ]);
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
}
