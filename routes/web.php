<?php

/**
 * Main Site
 */
Route::prefix('/')->group(function(){
    Route::get('/', function () {
        return view('main-site.main');
    });

    Route::get('pricing', function () {
        return view('main-site.pricing');
    })->name('pricing');

    Route::get('about', function () {
        return view('main-site.about');
    })->name('about');
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
