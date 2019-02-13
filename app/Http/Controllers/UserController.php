<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
	/**
	 * Returns a list of all the users for the platform
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function getAllUsers(){
		$users = User::all();
		return response()->json($users);
	}
}
