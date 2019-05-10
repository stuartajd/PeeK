<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Mail;
use Illuminate\Support\Str;
use App\Notifications\SetPassword;

class UserController extends Controller
{
	/**
	 * Returns a list of all the users for the platform
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function getAllUsers(){
		$users = User::where('company_id', $this->user()->company_id)->with(['role'])->get();
		return response()->json($users);
	}

	/**
	 * Register a new user account, linked to a customer
	 * @param Request $request
	 * @param $id
	 * @return \Illuminate\Http\JsonResponse
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function createUser(Request $request){
		$this->validate($request, [
			'name' => 'required|string|max:255',
			'email' => 'required|string|email|max:255|unique:users'
		]);

		$passwordSetToken = Str::random(40);

		$user = User::create([
			'name' => $request->get('name'),
			'email' => $request->get('email'),
			'provider_id' => '123456',
			'provider' => 'registration',
			'role_id' => $request->get('role'),
			'company_id' => $this->user()->company_id,
			'password_set_token' => $passwordSetToken
		]);

		$user->notify(new SetPassword($user));

		return $this->getAllUsers();
	}

	public function updateUser(Request $request){
		$this->validate($request, [
			'name' => 'required|string|max:255',
			'email' => 'required|string|email|max:255'
		]);

		$user = User::where('id', $request->get('id'))->first();
		$user->name = $request->get('name');
		$user->email = $request->get('email');
		$user->role_id = $request->get('role_id');
		$user->save();

		return $this->getAllUsers();
	}

	public function getSetPassword(Request $request, $token){
		$user = User::where('password_set_token', $token)->with('company')->first();
		return view('auth.verify', $user);
	}

	public function setPassword(Request $request, $token){
		$user = User::where('password_set_token', $token)->with('company')->first();
		$user->password = bcrypt($request->get('password'));
		$user->save();

		return redirect('login');
	}

}
