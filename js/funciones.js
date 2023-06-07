const validarCorreo=(correo)=>{

    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo.trim());
}


const validarPassword=(password)=>{

return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password.trim());
}

const validarNombre=(nombre)=>{

return / ^ [a-zA-Z] + [a-zA-Z] + $ / 
}