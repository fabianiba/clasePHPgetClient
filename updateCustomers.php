<?php
	include ('connectDB.php');

	$name = $_POST["nameCliente"];
	$apellido = $_POST["apellidoCliente"];
	$email = $_POST["emailCliente"];
	$dni = $_POST["dniCliente"];
	$telefono = $_POST["telCliente"];
	$fecha = $_POST["fechaCliente"];

	$stmt = $connectionDB->prepare(' UPDATE cliente SET dniCliente=?, nombre=?, apellido=?, telefono=?, email=?, fechaNac=?  WHERE dniCliente=?  ');

	$stmt->bind_param('issssdi',$dni,$name,$apellido,$telefono,$email,$fecha,$dni);

	$stmt->execute();

?>