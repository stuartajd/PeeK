<?php

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::get('login/{provider}', 'SocialController@redirect');
Route::post('login/{provider}/callback','SocialController@callback');
Route::get('no-account', function() { return view('auth.missing'); });
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('logout', 'Auth\LoginController@logout');
Route::get('register-18f8f39c9c', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register-18f8f39c9c', 'Auth\RegisterController@register');
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::group(['prefix' => 'api', 'middleware' => ['auth']], function(){
    Route::get('state', 'StateController@getState');

    /** Task Routes */
    Route::group(['prefix'=>'tasks'], function(){
		Route::get('/', 'TaskController@getUserTasks');
		Route::get('/{tid}', 'TaskController@getTask');

		Route::put('/{tid}', 'TaskController@updateTask');
		Route::post('/', 'TaskController@createTask');
	});

	/** Task Routes */
	Route::group(['prefix'=>'users'], function(){
		Route::get('/getAllUsers', 'UserController@getAllUsers');
		Route::post('/create/{id}', 'UserController@createUser');
	});
});

Route::group(['middleware' => 'auth'], function() {
    Route::any('{path?}', function()
    {
        return view('router');
    })->where("path", ".+");
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
