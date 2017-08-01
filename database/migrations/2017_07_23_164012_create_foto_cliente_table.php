<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFotoClienteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foto_cliente', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('idCliente')->unsigned();
            $table->integer('idFoto')->unsigned();
        });

        Schema::table('foto_cliente', function($table) {
            $table->foreign('idCliente')->references('id')->on('clientes');
            $table->foreign('idFoto')->references('id')->on('fotoPerfilCliente');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foto_cliente');
    }
}
