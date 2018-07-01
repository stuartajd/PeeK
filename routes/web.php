<?php

/**
 * Main Site
 */
Route::prefix('/')->group(function(){
    Route::get('/', function () {
        return view('main-site.main');
    })->name('main');

    Route::get('plans', function () {
        return view('main-site.plans');
    })->name('main.plans');

    Route::get('about', function () {
        return view('main-site.about');
    })->name('main.about');
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
    Route::get('/{id}/{slug}', 'BlogController@read')->name('post');
});

/**
 * Auth Routes
 */
Route::Auth();
