<?php

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::get('login/{provider}', 'SocialController@redirect');
Route::get('login/{provider}/callback','SocialController@Callback');
Route::get('no-account', function() { return view('auth.missing'); });
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('logout', 'Auth\LoginController@logout');
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::group(['prefix' => 'api', 'middleware' => 'auth'], function(){
    Route::get('state', 'StateController@getState');

    /** Task Routes */
    Route::group(['prefix'=>'tasks'], function(){
		Route::get('/', 'TaskController@getUserTasks');
		Route::get('/{tid}', 'TaskController@getTask');

		Route::put('/{tid}', 'TaskController@updateTask');
	});

	/** Task Routes */
	Route::group(['prefix'=>'users'], function(){
		Route::get('/getAllUsers', 'UserController@getAllUsers');
	});
});

Route::group(['middleware' => 'auth'], function() {
    Route::any('{path?}', function()
    {
        return view('router');
    })->where("path", ".+");
});
