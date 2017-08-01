<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
	public $timestamps = false;

    static public function ingresarCliente($idUser, $datos){

    	$date = new \DateTime($datos->get('dia').'-'.$datos->get('mes').'-'.$datos->get('anio'));
    	
    	$clientes = new Clientes;
    	$clientes->idUser = $idUser;
    	$clientes->telefono = $datos->tel;
    	$clientes->fecha_nac = $date->format('Y-m-d');

    	if($clientes->save()){
    		return 1;
    	}

    	return 0;
    }
}
