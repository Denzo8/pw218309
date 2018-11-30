<?php
	$servidor="localhost";
	$usuario = "root";
	$password="";
	$bd="alumnos";
	$conexion=mysqli_connect($servidor,$usuario,$password,$bd);
	$consulta="select ncontrol,nombre,apellido,edad from alumnositc";
	$resultado =mysqli_query($conexion,$consulta);
	$salida=array();
	if(mysqli_num_rows($resultado)>0){
		while($registro=mysqli_fetch_array($resultado)){
			// $salida[]=$registro;
			array_push($salida,$registro);
		}

	}
	// var_dump($salida);
	print json_encode($salida);
?>