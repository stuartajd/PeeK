<?php



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
 * Blog Routes
 */
Route::prefix('blog')->group(function(){
    Route::get('/', 'BlogController@index')->name('blog');
    Route::get('/{slug}', 'BlogController@read');
});

/**
 * Auth Routes
 */
Route::Auth();
