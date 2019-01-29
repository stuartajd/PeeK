<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Socialite;
use App\Models\User;

class SocialController extends Controller
{
	//
	public function redirect($provider)
	{
		return Socialite::driver($provider)->redirect();
	}

	public function Callback($provider)
	{
		$userSocial = Socialite::driver($provider)->stateless()->user();
		$users = User::where(['email' => $userSocial->getEmail()])->first();
		if ($users) {
			Auth::login($users);
			return redirect('/');
		} else {
			// User doesn't exist, don't create them here.
//			$user = User::create([
//				'name' => $userSocial->getName(),
//				'email' => $userSocial->getEmail(),
//				'image' => $userSocial->getAvatar(),
//				'provider_id' => $userSocial->getId(),
//				'provider' => $provider,
//			]);
			return redirect('/no-account');
		}
	}
}
