<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClienteCasaEstudioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cliente_casaEstudio', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('idUser')->unsigned();
            $table->integer('idCasaEstudio')->unsigned();
        });

        Schema::table('cliente_casaEstudio', function($table) {
        
            $table->foreign('idUser')->references('id')->on('users');
            $table->foreign('idCasaEstudio')->references('id')->on('casaEstudio');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cliente_casaEstudio');
    }
}
