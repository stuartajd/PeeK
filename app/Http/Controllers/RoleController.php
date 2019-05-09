<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function getAllRoles(){
	    $roles = Role::where('company_id', $this->user()->company->id)->get();
	    return response()->json($roles);
    }
}
