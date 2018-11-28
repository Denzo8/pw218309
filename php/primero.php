<?php

	$variable = 10;

	for ($i=0; $i < $variable ; $i++) { 
		print("Hola PHP <br>");
	}


	$servidor = "localhost";//127.0.0.1
	$usuario = "root";
	$password = "";
	$basedatos = "pwd09";

	$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
	$sql="select ncontrol,nombre,apellido,edad from alumnos";
	$resultado=mysqli_query($conexion, $sql);
	var arregloDatos = array();
	if(mysqli_num_rows($resultado) > 0){
		while($registro=mysqli_fetch_array($resultado)){
			$arregloDatos[]= $registro;
			//array_push($arregloDatos, $registro);
		}
	}
	print($arregloDatos);//imprimir en pantalla

	print json_encode($arregloDatos);
?>