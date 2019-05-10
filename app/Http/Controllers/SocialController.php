<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Socialite;
use App\Models\User;

class SocialController extends Controller
{
	public function redirect($provider)
	{
		return Socialite::driver($provider)->redirect();
	}

	public function callback($provider)
	{
		$userSocial = Socialite::driver($provider)->user();
		$user = User::where('email', $userSocial->getEmail())->first();

		if ($user) {
			Auth::login($user, true);
			return redirect('/');
		} else {
			return redirect()->route('no-account');
		}
	}
}
