<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
	protected $hidden = ['updated_at', 'created_at', 'company_id'];
	/**
	 * Returns the company that the account is linked too
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function company(){
		return $this->belongsTo(Company::class);
	}
}
