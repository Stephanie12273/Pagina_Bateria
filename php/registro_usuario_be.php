<?php

    include 'conexion_be.php';

    $nombre = $_POST['nombre'];
    $cedula = $_POST['cedula'];
    $motor = $_POST['motor'];
    $chasis = $_POST['chasis'];
    $correo = $_POST['correo'];
    $contraseña = $_POST['contrasena'];

    $query = "INSERT INTO usuarios (Nombre, Cedula, Motor, Chasis, Correo, Contraseña) VALUES ('$nombre', '$cedula', '$motor', '$chasis', '$correo', '$contraseña')";
    
    $verificar_correo = mysqli_query($conexion,"SELECT * FROM usuarios WHERE Correo='$correo'");

    if (mysqli_num_rows($verificar_correo)>0){
        echo '
            <script>
            alert("Correo ya registrado. Intenta con otro correo");
            window.location ="../Login.php";
            </script> 
        ';
        exit();

    }

    $verificar_cedula = mysqli_query($conexion,"SELECT * FROM usuarios WHERE Cedula='$cedula'");

    if (mysqli_num_rows($verificar_cedula)>0){
        echo '
            <script>
            alert("Usuario ya registrado.");
            window.location ="../Login.php";
            </script> 
        ';
        exit();

    }

    $verificar_motor = mysqli_query($conexion,"SELECT * FROM usuarios WHERE Motor='$motor'");

    if (mysqli_num_rows($verificar_motor)>0){
        echo '
            <script>
            alert("Serie de motor ya registrada");
            window.location ="../Login.php";
            </script> 
        ';
        exit();
    }

    $verificar_chasis = mysqli_query($conexion,"SELECT * FROM usuarios WHERE Chasis='$chasis'");

    if (mysqli_num_rows($verificar_chasis)>0){
        echo '
            <script>
            alert("Serie de chasis ya registrada");
            window.location ="../Login.php";
            </script> 
        ';
        exit();

    }

    $ejecutar = mysqli_query($conexion, $query);
    

    if ($ejecutar) {
        echo '
            <script>
                alert("Usuario cargado exitosamente");
                window.location ="../Login.php";
            </script>
        ';
    } else {
        echo '<script>
        alert("Usuario no cargado");
        window.location ="../Login.php";
    </script>';
    }

    mysqli_close($conexion);

?>
