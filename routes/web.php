<?php

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::get('login/{provider}', 'SocialController@redirect');
Route::post('login/{provider}/callback','SocialController@callback');
Route::get('no-account', function() { return view('auth.missing'); })->name('no-account');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('logout', 'Auth\LoginController@logout');
Route::get('register-18f8f39c9c', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register-18f8f39c9c', 'Auth\RegisterController@register');
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
Route::get('/set-password/{token}', 'UserController@getSetPassword');
Route::post('/set-password/{token}', 'UserController@setPassword');

Route::group(['prefix' => 'api', 'middleware' => ['auth']], function(){
    Route::get('state', 'StateController@getState');

    /** Task Routes */
    Route::group(['prefix'=>'tasks'], function(){
		Route::get('/', 'TaskController@getUserTasks');
	    Route::get('/company', 'TaskController@getAllTasks');
	    Route::get('/{tid}', 'TaskController@getTask');
	    Route::get('/breakdown/{tid}', 'TaskController@getBreakdown');
	    Route::post('/breakdown/{tid}/create', 'TaskController@createBreakdown');

	    Route::put('/update/{tid}', 'TaskController@updateTask');
		Route::post('/create', 'TaskController@createTask');
	});

	/** Task Routes */
	Route::group(['prefix'=>'settings'], function(){
		Route::get('/accounts', 'StateController@getAccounts');

		Route::get('/role', 'RoleController@getAllRoles');
		Route::post('/role/update', 'RoleController@updateRoles');
	});

	/** Task Routes */
	Route::group(['prefix'=>'users'], function(){
		Route::get('/getAllUsers', 'UserController@getAllUsers');
		Route::post('/create', 'UserController@createUser');
		Route::post('/update', 'UserController@updateUser');
	});
});

Route::group(['middleware' => 'auth'], function() {
    Route::any('{path?}', function()
    {
        return view('router');
    })->where("path", ".+");
});

Auth::routes();
