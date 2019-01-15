<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\TaskUser as TaskResource;

class TaskUser extends Model
{
    protected $table = 'tasks_users';

    public function task(){
        return $this->belongsTo('App\Models\Task');
    }

    public function user(){
        return new TaskResource($this->belongsTo('App\Models\User', 'user_id'));
    }
}
