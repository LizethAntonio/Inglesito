<?php
require 'conexion_postgres.php';
session_start();
$correo = $_POST['email'];
$clave = $_POST['pass'];

$query = "SELECT * FROM infante WHERE correo= '$correo' AND contrasenia= '$clave'";
$consulta = pg_query($conexion, $query);
$cantidad = pg_num_rows($consulta);

if($cantidad>0){
    $_SESSION['nombre_usuario']=$correo;
    header("location: principal-view.ejs");
}else{
    echo "Datos incorrectos!";
}
?>
