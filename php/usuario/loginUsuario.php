<?php

require_once '../config.php';

$valido['success']=array('success'=>false, 'mensaje'=>"" , 'nombre'=>"");

if($_POST){
    $correo=$_POST['correo'];
    $password=md5($_POST['password']);


    $sql="SELECT * FROM usuario WHERE correo='$correo' AND password '$password' ";
    $resultado=$cx->query($sql)
    $n=$resultado->num_rows;
    if($n>0){
        $row=$resultado->fetch_array();
        $valido['successe']=true;
        $valido['mensaje']="BIENVENIDO".$row['nombre'];
        $valido['nombre']=$row['nombre'];

    }else{
        $valido['successe']=false;
        $valido['mensaje']="EL CORREO ELECTRONICO YA ESTA EN USO";
    }

    }else{
            $valido['successe']=false;
            $valido['mensaje']="ERROR: NO SE GUARDO";

        }
        echo json_encode($valido);
        ?>