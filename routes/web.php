<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main-site.main');
});

/**
 * Dashboard Routes
 */
Route::prefix('dashboard')->group(function(){
    Route::get('/', 'HomeController@index')->name('home');
});

/**
 * Auth Routes
 */
Route::Auth();
