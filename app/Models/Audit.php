<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Audit extends Model
{
    protected $hidden = ['id', 'auditable_id', 'auditable_type', 'updated_at', 'user_id'];
	protected $fillable = ['user_id', 'audit', 'company_id'];
	/**
	 * @return \Illuminate\Database\Eloquent\Relations\MorphTo
	 */
	public function auditable(){
		return $this->morphTo('audit');
	}

	public function user(){
		return $this->belongsTo(User::class);
	}

	/**
	 * Returns the company that the audit log is linked too
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function company(){
		return $this->belongsTo(Company::class);
	}
}
