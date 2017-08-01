<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFotoPerfilVendedorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fotoPerfilVendedor', function (Blueprint $table) {
            $table->increments('id');
            $table->text('foto');
            $table->date('fecha');
            $table->integer('idEstado')->unsigned();
            $table->timestamps();
        });
        Schema::table('fotoPerfilVendedor', function($table) {
           $table->foreign('idEstado')->references('id')->on('estado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fotoPerfilVendedor');
    }
}
