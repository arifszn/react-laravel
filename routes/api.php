<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:api'], 'prefix' => 'v1'], function () {
    Route::get('/lead/list', 'Api\LeadController@listData');
    Route::post('/lead/create', 'Api\LeadController@create');
    Route::post('/lead/update', 'Api\LeadController@update');
    Route::post('/lead/destroy', 'Api\LeadController@destroy');

    Route::get('/dashboard-data', 'Api\HomeController@getData');
});
