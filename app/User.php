<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    static public function ingresarUsuario($datos){
        
        $user = DB::table('users')->insertGetId([
            'nombres' => $datos->nom ,
            'apellidos' => $datos->ape ,
            'email' => $datos->correo ,
            'password' => Hash::make($datos->pass),
            'idSexo' => $datos->idSexo
        ]);

        return $user;
    }

    static public function mostrarUsuarios(){
        $user = DB::select('select nombres, apellidos, email from users');
        return $user;
    }
}
