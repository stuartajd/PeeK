<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $hidden = ['created_by'];

    public function creator(){
        return $this->belongsTo(User::class, 'created_by');
    }

    public function users(){
        return $this->hasMany(TaskUser::class)->with('user');
    }

    public function account(){
    	return $this->hasOne(Account::class);
	}
}
