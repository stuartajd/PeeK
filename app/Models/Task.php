<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
	protected $fillable = ['title', 'description', 'priority', 'due_date', 'account_id'];
    protected $hidden = ['created_by'];

    public function creator(){
        return $this->belongsTo(User::class, 'created_by');
    }

    public function users(){
        return $this->hasMany(TaskUser::class)->with('user');
    }

    public function account(){
    	return $this->belongsTo(Account::class);
	}

	/**
	 * Get all audit logs that are available on this task
	 * @return \Illuminate\Database\Eloquent\Relations\MorphMany
	 */
	public function audit(){
    	return $this->morphMany(Audit::class, 'auditable');
	}


}
