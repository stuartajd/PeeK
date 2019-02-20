<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
	/**
	 * Returns the company that the account is linked too
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function company(){
		return $this->belongsTo(Company::class);
	}
}
