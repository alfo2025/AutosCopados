const PatronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const correo = document.querySelector("#correo-usuario")
const mensaje = document.querySelector("#MensajeAprobacion")
const mensajeCorreo = document.querySelector("#MensajeCorreo")

function validarCorrreo() {
    const CorreoLimpio = correo.value.trim()
    let condicion = false

    if(CorreoLimpio.length >= 3)
        if(PatronCorreo.test(CorreoLimpio)){
            condicion = true
            mensajeCorreo.textContent = "Mail ingresado de manera correcta"
            mensajeCorreo.classList.toggle("oculto")
            mensajeCorreo.classList.toggle("valido")
        }
        else{
            mensajeCorreo.textContent = "Error, no escribio bien el correo"
            mensajeCorreo.classList.toggle("oculto")
            mensajeCorreo.classList.toggle("Invalido")
        }
    else{
        mensajeCorreo.textContent ="Error, no pusite la cantidad nesesaria"
        mensajeCorreo.classList.toggle("oculto")
        mensajeCorreo.classList.toggle("Invalido")
    }

    return condicion
}

function validarClave(){
    const claveLimpio = "hola"
}

function validarFormulario(){
    const nombreValido = validarNombre
    const claveValida = false

    if(nombreValido && claveValida){
        mensaje.textContent = "Formulario ingresado Correctamente"
    }
    else{
        mensaje.textContent = "Los datos ingresados son erroneos o no cumplen las condiciones, vuelva a intentarlo"
        mensaje.classList.toggle("Invalido")
    }
}