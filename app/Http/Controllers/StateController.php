<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class StateController extends Controller
{
    //
    function getState(){
        return response()->json([
            'user' => $this->user(),
	        'company' => $this->user()->company,
	        'roles' => Role::where('company_id', $this->user()->company->id)->get()
        ]);
    }
}
