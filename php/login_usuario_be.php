<?php
    session_start();

    include "conexion_be.php";

    $correo=$_POST['correo'];
    $contraseña=$_POST['contrasena'];

    $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE Correo='$correo' and Contraseña='$contraseña'");
    
    if(mysqli_num_rows($validar_login)>0){

        $_SESSION['usuario']=$correo;
        header("location:../Dashboard.php");
        echo "exitosa";
        exit;

    }else{
        echo '
            <script>
            alert("El usuario no existe. Verifique los datos introducidos");
            window.location ="../Login.php";
            </script>
        ';
        exit;
    }


?>