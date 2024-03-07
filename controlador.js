
let cajaNombre = document.getElementById('nombre');
let cajaEmail = document.getElementById('email');
let cajaMensaje = document.getElementById('mensaje');

document.getElementById('enviar').addEventListener('click', function(evento) {


    evento.preventDefault()
   
    let nombre = cajaNombre.value
    let email.cajaEmail.value
    let telefono = cajaTelefono.value
    let asunto = cajaAsunto.value
    let mensaje = cajaMensaje.value

    console.log('Nombre:', nombre)
    console.log('Email:', email)
    console.log('Mensaje:', mensaje)

   
});
