 
let cajaNombre = document.getElementById('nombre');
let cajaEmail = document.getElementById('email');
let cajaMensaje = document.getElementById('mensaje');
let cajaTelefono = document.getElementById("telefono");
let cajaAsunto = document.getElementById("asunto");

document.getElementById('enviar').addEventListener('click', function(evento) {


    evento.preventDefault()
   
    let nombre = cajaNombre.value
    let email = cajaEmail.value
    let telefono = cajaTelefono.value
    let asunto = cajaAsunto.value
    let mensaje = cajaMensaje.value


   if(nombre=="" && email=="" && telefono=="" && asunto=="" && mensaje==""){

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus datos no estan completos",
    
   })
    
}else{
    Swal.fire({
        title: "correcto",
        text: "Tus datos son correctas",
        icon: "success"
    
        
      });
    }
})