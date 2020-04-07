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

Route::get('/', 'LoginController@redirectToIndex');

Route::get('/user/login', 'LoginController@index')->name('Login');
Route::get('/user/registration', 'LoginController@index');

//Route::get('/user/{path?}', 'LoginController@index')->name('Login');

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');