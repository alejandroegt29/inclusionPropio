<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFotoVendedorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foto_vendedor', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('idVendedor')->unsigned();
            $table->integer('idFoto')->unsigned();
        });

        Schema::table('foto_vendedor', function($table) {
            $table->foreign('idVendedor')->references('id')->on('vendedor');
            $table->foreign('idFoto')->references('id')->on('fotoPerfilVendedor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foto_vendedor');
    }
}
