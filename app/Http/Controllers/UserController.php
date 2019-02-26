<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
	/**
	 * Returns a list of all the users for the platform
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function getAllUsers(){
		$users = User::where('company_id', Auth::user()->company_id)->with(['role'])->get();
		return response()->json($users);
	}
}
