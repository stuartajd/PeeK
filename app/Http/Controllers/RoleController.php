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

	/**
	 * Update all roles
	 * @param Request $request
	 * @return
	 */
    public function updateRoles(Request $request){
    	foreach($request->all() as $role){
    		if(isset($role['id'])){
			    $roleDB = Role::where('id', $role['id'])->first();
		    } else{
				$roleDB = new Role();
				$roleDB->company_id = $this->user()->company->id;
			}

		    if(isset($role['deleted'])){
		    	if($roleDB->users){
					// Cannot delete, has users

			    } else {
				    $roleDB->delete();
			    }
		    } else {
			    $roleDB->role_name = $role['role_name'];
			    $roleDB->role_type = $role['role_type'];
			    $roleDB->save();
		    }
	    }
    	return $this->getAllRoles();
    }
}
