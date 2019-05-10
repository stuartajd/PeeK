<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
	protected $table = 'companies';

	/**
	 * Returns the users that are members of the company
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 */
	public function users(){
		return $this->hasMany(User::class);
	}

	/**
	 * Returns all the tasks that are under the company
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function tasks(){
		return $this->hasMany(Task::class);
	}

	/**
	 * Returns all the accounts that are under the company
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function accounts(){
		return $this->hasMany(Account::class);
	}

	/**
	 * Returns all the audit logs that are under the company
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function audits(){
		return $this->hasMany(Audit::class);
	}
}
