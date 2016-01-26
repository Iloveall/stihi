<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/


Route::group(['prefix' => 'api'], function () {
  Route::resource('post', 'PostController');
  Route::post('user/create', 'Auth\AuthController@create');
  Route::post('user/auth', 'Auth\AuthController@auth');

});

Route::group(['prefix' => 'api', 'middleware' => 'auth:api'], function () {
  Route::get('user/is-auth', 'Auth\AuthController@isAuth');
});

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');
});
