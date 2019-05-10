<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable
{
    use Notifiable;

	public function routeNotificationForSlack($notification)
	{
		return 'https://hooks.slack.com/services/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';
	}

    protected $fillable = [
        'name', 'email', 'password', 'provider', 'provider_id', 'company_id', 'password_set_token'
    ];


    protected $hidden = [
    	'provider', 'provider_id', 'password', 'remember_token'
    ];

	/**
	 * Return all tasks that the user is a member of
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
    public function tasks(){
        return $this->belongsToMany('App\Models\Task', 'tasks_users');
    }

	/**
	* Returns the company that the user is linked too
	* @return \Illuminate\Database\Eloquent\Relations\belongsTo
	*/
	public function company(){
		return $this->belongsTo(Company::class);
	}

	/**
	 * Returns the role information for the specific user
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function role(){
		return $this->belongsTo(Role::class);
	}
}
