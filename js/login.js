const PatronCorreo = /[a-z]\/@\/(a:z)\/.com/
const correo = document.querySelector("#correo-usuario")
const mensaje = document.querySelector("#MensajeAprobacion")
const mensajeCorreo = document.querySelector("#MensajeCorreo")

function validarCorrreo() {
    const CorreoLimpio = correo.value.trim()
    const condicion = false

    if(CorreoLimpio.length >= 3)
        if(PatronCorreo.test(correo)){
            condicion = true
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