<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Mail;

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

	/**
	 * Register a new user account, linked to a customer
	 * @param Request $request
	 * @param $id
	 * @return \Illuminate\Http\JsonResponse
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function createUser(Request $request, $id){
		$this->validate($request, [
			'name' => 'required|string|max:255',
			'email' => 'required|string|email|max:255|unique:users'
		]);

		$message = 'This is an example ';

		Mail::send('emails.template', ['title' => 'Account Verification', 'message' => $message, 'email' => $request->get('email')], function ($message) use ($request)
		{
			$message->subject('Account Verification');
			$message->to($request->get('email'));
		});

		$user = User::create([
			'name' => $request->get('name'),
			'email' => $request->get('email'),
			'provider_id' => '',
			'provider' => 'registration',
			'company_id' => $id
		]);

		return response()->json($user);
	}
}
