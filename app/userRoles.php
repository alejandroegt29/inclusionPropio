<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class userRoles extends Model
{
	
public $timestamps = false;

    static function insertar($idRoles, $idUser){
    		
    		$user = new userRoles;

    		$user->idRoles = $idRoles;
    		$user->idUser = $idUser;
        	if($user->save()){
        		return "all ok";
        	}
    }
}
