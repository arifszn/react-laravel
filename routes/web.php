<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/clearapp', function () {
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('view:clear');
    Session::flush();
    return redirect('/');
});


Route::group(['middleware' => ['guest', 'web']], function () {
    Route::get('/', 'AuthController@redirectToIndex');

    Route::get('/user/login', 'AuthController@index')->name('Login');
    Route::get('/user/registration', 'AuthController@index');

    Route::post('/user/login', 'AuthController@login');
    Route::post('/user/registration', 'AuthController@signup');
});


Route::group(['middleware' => ['auth'], 'prefix' => 'user'], function () {
    Route::get('/home', 'HomeController@index')->name('Dashboard');
});

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');