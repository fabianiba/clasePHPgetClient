<?php
	include ('connectDB.php');
	$nom = '%'.$_GET["nombre"].'%';


	$stmt = $connectionDB->prepare('SELECT * FROM cliente WHERE nombre like (?) ');

	$stmt->bind_param('s',$nom);

	$stmt->execute();
	$result = $stmt->get_result();
	$arreglo=array();
	$i=0;

	while($row = $result->fetch_assoc()){
		$arreglo[$i] = $row;
		$i++;
	}
	
	$response = json_encode($arreglo);
 	echo $response;

?>