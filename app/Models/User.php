<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'provider', 'provider_id'
    ];


    protected $hidden = [
    	'email', 'provider', 'provider_id', 'password', 'remember_token'
    ];

	/**
	 * Return all tasks that the user is a member of
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
    public function tasks(){
        return $this->belongsToMany('App\Models\Task', 'tasks_users');
    }
}
