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
Route::prefix('dashboard')->middleware(['auth'])->group(function(){
    Route::get('/', 'HomeController@index')->name('home');
});

Route::prefix('system')->middleware(['auth', 'checkstaff'])->group(function(){
    Route::get('/', "SystemController@index")->name("system");

    Route::prefix('blog')->middleware('checkstaff:permission_blog')->group(function(){
        Route::get('/', 'SystemController@blog_view')->name('system.blog.view');
        Route::put('/{id}', 'SystemController@blog_update')->name('system.blog.update');
        Route::delete('/{id}', 'SystemController@blog_delete')->name('system.blog.delete');
        Route::get('/create', 'SystemController@blog_create_view')->name('system.blog.create');
        Route::post('/create', 'SystemController@blog_create')->name('system.blog.create.post');
    });
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
