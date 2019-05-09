<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\TaskUser as TaskResource;

class TaskUser extends Model
{
    protected $table = 'tasks_users';

    public function task(){
        return $this->hasMany(Task::class);
    }

    public function user(){
        return new TaskResource($this->hasMany(User::class));
    }
}
