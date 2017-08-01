<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta id="token" name="token" value="{{csrf_token() }}">
	<title>vue y laravel</title>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>
<body>
<script src="js/jquery.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="bootstrap-validator-master/dist/validator.min.js"></script>
	<!--<script src="bootstrap-validator-master/dist/lenguaje.js"></script>-->

	<div class="container">
		@yield('contenido')
	</div>
	



	<script src="js/vue.min.js"></script>
	<script src="js/vue-resource.js"></script>
	<script src="js/vue/lista.js"></script>

	

	

</body>
</html>