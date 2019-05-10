<?php

namespace App\Models;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;

class TaskBreakdown extends Model
{
	protected $table = 'tasks_breakdown';
	protected $fillable = ['title', 'description', 'status', 'company_id', 'created_by', 'task_id'];
	public function user(){
		return $this->belongsTo(User::class, 'created_by');
	}
	public function company(){
		return $this->belongsTo(Company::class);
	}
	public function task(){
		return $this->belongsTo(Task::class);
	}
}
