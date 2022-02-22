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

// Site
Route::get('/')->name('home')->uses('SiteController@index');

// Auth
Route::get('login')->name('login')->uses('Auth\LoginController@showLoginForm')->middleware('guest');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login')->middleware('guest');
Route::post('logout')->name('logout')->uses('Auth\LoginController@logout');

Route::group(['middleware' => ['role:user']], function () {
    // Dashboard
    Route::get('/dashboard')->name('dashboard')->uses('DashboardController@index')->middleware('auth');

    // Users
    Route::post('users')->name('users.store')->uses('UsersController@store')->middleware('auth');
    Route::put('users/{user}')->name('users.update')->uses('UsersController@update')->middleware('auth');
    Route::get('users/{user}/edit')->name('users.edit')->uses('UsersController@edit')->middleware('auth');
});

Route::group(['middleware' => ['role:owner']], function () {
    // Users
    Route::get('users/list')->name('users')->uses('UsersController@index')->middleware('auth');
    Route::delete('users/{user}')->name('users.destroy')->uses('UsersController@destroy')->middleware('auth');
    Route::put('users/{user}/restore')->name('users.restore')->uses('UsersController@restore')->middleware('auth');
    Route::get('users/create')->name('users.create')->uses('UsersController@create')->middleware('auth');

    // Images
    Route::get('/img/{path}', 'ImagesController@show')->where('path', '.*');
});
