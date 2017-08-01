<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;

use App\Roles;
use App\User;
use App\userRoles;
use App\clientes;
use App\Sexo;

class funcionesController extends Controller
{
    public function insertar(Request $datos){
       
       $users = User::ingresarUsuario($datos);//ingresando datos en tabla Users

        if($users){

            $getId = User::all()->where('email',"$datos->correo");
           
            foreach($getId as $t){

                $id = $t->id; // al nuevo ID le pasamos el ID del arreglo getId

                $userRoles = userRoles::insertar($datos->idSelect, $id);//guardando idUser y diRoles en tabla user-roles
                if ($userRoles) {
                   
                        $clientes = clientes::ingresarCliente($id, $datos);//guardando cliente
                        if (count($clientes)>0) {
                            return "todo bien";
                        }
                        return "error";
                }
                return "error";

            } 
            //return $userRoles;
        }
        return "error";
    }

    public function borrar(){

    }
    
    public function mostrar(){

        $verUser = User::mostrarUsuarios();
        return $verUser;
    }

    public function actualizar(){

    }
    public function verList(){

    	$roles = Roles::all();
    	
    	return view('vistas.inicio')->with('roles',$roles);
    }
    public function verSexo(){
        $sexo = Sexo::all();
        return response()->json($sexo);
    }

    public function verRoles(){

    	$roles = Roles::all();
    	
    	return response()->json($roles);

    }
}
