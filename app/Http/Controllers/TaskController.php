<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class TaskController extends Controller
{
    //
    function getUserTasks(){
        $user = $this->user();
        $tasks = $user->tasks()->with(['creator'])->get();

        return response()->json([
            'tasks' => $tasks
        ]);
    }

    function getTask($tid){
        $user = $this->user();
        $tasks = $user->tasks()->where('task_id', '=', $tid)->with(['creator', 'users'])->get();
        return response()->json([
            'tasks' => $tasks
        ]);
    }
}
