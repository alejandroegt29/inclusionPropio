@extends('masterPages.mp_index')

@section('contenido')
	<h1>Wololo</h1>
<div id="lista">
	<form id="form"  role="lista" data-toggle="validator" method="POST" action="guardarCliente" >
	{{ csrf_field() }}

	{{--$roles or  ''--}}
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
			<label for="">Indique su rol:</label> 
		<select name="idSelect" v-model="formCliente.idSelect" class="form-control" required >
			<option value="">Seleccione.....</option>
			<option v-bind:value="bdnueva.id" v-for="bdnueva in bdListaroles" >@{{ bdnueva.nombre }}</option>
		</select>
		<div class="help-block with-errors"></div>
		</div>
		<div class="form-group">
			<label for="">Sexo:</label> 
		<select name="idSexo" v-model="formCliente.idSexo" class="form-control" required >
			<option value="">Seleccione.....</option>
			<option v-bind:value="nuevaSexo.id" v-for="nuevaSexo in bdListasexo" >@{{ nuevaSexo.nombre }}</option>
		</select>
		<div class="help-block with-errors"></div>
		</div>
		<div class="form-group">
			<label data-error="este ñoño" class="control-label">Nombres:</label>
			<input name="nom" class="form-control" id="nom" type="text" v-model="formCliente.nom" required >
			<div class="help-block with-errors"></div>
    	</div>
    	<div class="form-group">
    		<label for="inputName" class="control-label">Apellidos:</label>
			<input name="ape" class="form-control" type="text" v-model="formCliente.ape" required>
			<div class="help-block with-errors"></div>
    	</div>
		</div>

		<div class="col-md-6">
			<div class="form-group">
    		<label for="inputName" class="control-label">Nacimiento:</label>
    		<input name="dia" class="" size="2" maxlength="2" type="text" v-model="formCliente.dia" required>-
    		<input name="mes" class="" size="2" maxlength="2" type="text" v-model="formCliente.mes" required>-
    		<input name="anio" class="" size="2" maxlength="4" type="text" v-model="formCliente.anio" required>
    		<div class="help-block with-errors"></div>
    	</div>
    	<div class="form-group">
    		<label for="inputName" class="control-label">Telefono:</label>
    		<input name="tel" type="text" class="form-control" v-model="formCliente.tel" required>
    		<div class="help-block with-errors"></div>
    	</div>
    	<div class="form-group">
    		<label for="inputName" class="control-label">Correo Electronico:</label>
    		<input name="correo" type="text" class="form-control" v-model="formCliente.correo" required>
    		<div class="help-block with-errors"></div>
    	</div>

    	<div class="form-group">
    		<label for="inputName" class="control-label">Contraseña:</label>
    		<input name="pass" type="password" data-minlength="6" class="form-control"  v-model="formCliente.pass" required>
    		 <div class="help-block with-errors"></div>
    	</div>

	
		 <input type="submit" value="Guardar">
		</div>

	</div>	
    	
	</form>



<table class="table">
	<tr>
		<td><strong>Nombre</strong></td>
		<td><strong>Apellido</strong></td>
		<td><strong>Correo</strong></td>
	</tr>
	<tr v-for="nuevavista in bdListaUsers">
		<td>@{{ nuevavista.nombres  }}</td>
		<td>@{{ nuevavista.apellidos  }}</td>
		<td>@{{ nuevavista.email  }}</td>
	</tr>	
	
	
</table>

</div>
	

	<script>
		jQuery(document).ready(function($) {
			$('form').validator({
					delay: 500,

 

		  // allows html inside the error messages

		  html: false,

		 

		  // disable submit button if there's invalid form

		  disable: true,

		 

		  // <a href="http://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a> to and focus the first field with an error upon validation of the form.

		  focus: true,

		 

		  // define your custom validation rules

		  custom: {},

		 

		  // default errof messages

		  errors: {

		    match: 'Does not match',

		    minlength: 'Not long enough'

		  },

		 

		  // feedback CSS classes

		  feedback: {

		    success: 'glyphicon-ok',

		    error: 'glyphicon-remove' }

					});

				});
	</script>

@endsection