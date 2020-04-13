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

    //react route
    Route::get('/login', 'AuthController@index')->name('Login');
    Route::get('/registration', 'AuthController@index')->name('Registration');

    Route::post('/login', 'AuthController@login');
    Route::post('/registration', 'AuthController@signup');
});


Route::group(['middleware' => ['auth']], function () {
    Route::get('/logout', 'HomeController@logout')->name('Logout');
    Route::get('/home', 'HomeController@index')->name('Dashboard');
    
    //react route
    Route::get('/lead/list', 'LeadController@index')->name('Leads');
    Route::get('/lead/new', 'LeadController@index')->name('NewLead');
    Route::get('/lead/edit/{id}', 'LeadController@index')->name('EditLead');


});

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');