var sesion=localStorage.getItem("nombre")

const checarSesion=()=>{
  if(sesion|=null){
    window.location.href="inicio.html";

  }

}

const registrarUsuario= async()=>{
    var correo=document.querySelector("#correo").value;
    var password=document.querySelector("#password").value;
    var nombre=document.querySelector("#nombre").value;
    if(correo.trim()==='' ||
    password.trim()==='' ||
    nombre.trim()==='' ){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'FALTA LLENAR CAMPOS',
            footer: 'CRUD CONTACTOS'
          })
          return;
    }

    if(!validarCorreo(correo)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'INTRODUCE UN CORREO ELECTRONICO VALIDO',
            footer: 'CRUD CONTACTOS'
          })
          return
    }
    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: 'INTRODUCE UN PASSWORD VALIDO <br> [Mayusculas, minusculas, numeros y min. 8 Caracteres]',
            footer: 'CRUD CONTACTOS'
          })
          return
    }
    if(!validarNombre(nombre)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'INTRODUCE UN NOMBRE VALIDO',
            footer: 'CRUD CONTACTOS'
          })
          return
    }
    // INSERTAR A LA BASE DE DATOS

    const datos=new FormData();
    datos.append("correo",correo);
    datos.append("password",password);
    datos.append("nombre",nombre);


    var respueta=await fetch("php/usuario/registrarUsuario.php",{
        method:'POST',
        body:datos
    });


    var resultado=await respueta.json();

    if(resultado.success==true){
        Swal.fire({
            icon: 'success',
            title: 'EXITO!',
            text: resultado.mensaje,
            footer: 'CRUD CONTACTOS'
          })
          document.querySelector("#formRegistrar").reset();
          setTimeout(()=>{
            window.location.href="index.html";
          },2000);
    }else{
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: resultado.mensaje,
            footer: 'CRUD CONTACTOS'
          }) 
    }
    
}
const loginUsuario= async()=>{
  var correo=document.querySelector("#correo").value;
  var password=document.querySelector("#password").value;
 
  if(correo.trim()==='' ||
  password.trim()==='' ){
  
      Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'FALTA LLENAR CAMPOS',
          footer: 'CRUD CONTACTOS'
        })
        return;
  }

  if(!validarCorreo(correo)){
      Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'INTRODUCE UN CORREO ELECTRONICO VALIDO',
          footer: 'CRUD CONTACTOS'
        })
        return
  }
  if(!validarPassword(password)){
      Swal.fire({
          icon: 'error',
          title: 'ERROR',
          html: 'INTRODUCE UN PASSWORD VALIDO <br> [Mayusculas, minusculas, numeros y min. 8 Caracteres]',
          footer: 'CRUD CONTACTOS'
        })
        return
  }
  // INSERTAR A LA BASE DE DATOS

  const datos=new FormData();
  datos.append("correo",correo);
  datos.append("password",password);



  var respueta=await fetch("php/usuario/loginUsuario.php",{
      method:'POST',
      body:datos
  });


  var resultado=await respueta.json();

  if(resultado.success==true){
      Swal.fire({
          icon: 'success',
          title: 'EXITO!',
          text: resultado.mensaje,
          footer: 'CRUD CONTACTOS'
        })
        document.querySelector("#formRegistrar").reset();
        localStorage.setItem("nombre",resultado.nombre)
        setTimeout(()=>{
          window.location.href="inicio.html";
        },2000);
  }else{
      Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: resultado.mensaje,
          footer: 'CRUD CONTACTOS'
        }) 
  }
}