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

Route::get('/', function () {
    return view('vistas.inicio');
});
Route::get('verList','funcionesController@verList');
Route::get('verRoles','funcionesController@verRoles');
Route::post('guardarCliente', 'funcionesController@insertar');
Route::get('/mostrarUsers', 'funcionesController@mostrar');
Route::get('/verSexo', 'funcionesController@verSexo');