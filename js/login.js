const PatronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const correoInput = document.querySelector("#correo-usuario")
const mensaje = document.querySelector("#MensajeAprobacion")
const mensajeCorreo = document.querySelector("#MensajeCorreo")
const claveInput =document.querySelector("#clave-usuario")
let claveValida = false
const mensajeClave = document.querySelector('#MensajeClave')
const iconosValidacion = document.getElementsByClassName('.iconoIMG')

function validarCorrreo() {
    const CorreoLimpio = correoInput.value.trim()
    let condicion = false

    if(CorreoLimpio.length >= 3)
        if(PatronCorreo.test(CorreoLimpio)){
            condicion = true
            mensajeCorreo.textContent = "Mail ingresado de manera correcta"
            mensajeCorreo.classList.remove("oculto")
            mensajeCorreo.classList.add("valido")
            correoInput.classList.remove("advertencia")
        }
        else{
            mensajeCorreo.textContent = "Error, no escribio bien el correo"
            mensajeCorreo.classList.remove("oculto")
            mensajeCorreo.classList.add("Invalido")
            correoInput.classList.add("advertencia")
            
        }
    else{
        mensajeCorreo.textContent ="Error, no pusite la cantidad nesesaria"
        mensajeCorreo.classList.remove("oculto")
        mensajeCorreo.classList.add("Invalido")
        correoInput.classList.add("advertencia")
    }

    return condicion
}

function validarClave(){
    const claveLimpio = claveInput.value.trim()
    
    if(mensajeClave.classList.value == 'oculto'){
        mensajeClave.classList.remove("oculto")
    }

    if(claveLimpio.length >= 8){
        mensajeClave.classList.add("valido")
        mensajeClave.classList.remove("Invalido")
        mensajeClave.textContent = "clave valida"
        claveValida = true
        claveInput.classList.remove("advertencia")
    }
    else{
        claveInput.classList.add("advertencia")
        mensajeClave.classList.remove("valido")
        mensajeClave.classList.add("Invalido")
        mensajeClave.textContent = "La contraseña debe ser mayor a 8 caracteres"
        claveValida = false
    }

}

claveInput.addEventListener('keyup', (e) => validarClave())
correoInput.addEventListener('keyup', (e) => validarCorrreo())


function validarFormulario(){
    const nombreValido = validarNombre
    

    if(nombreValido && claveValida){
        mensaje.textContent = "Formulario ingresado Correctamente"
    }
    else{
        mensaje.textContent = "Los datos ingresados son erroneos o no cumplen las condiciones, vuelva a intentarlo"
        mensaje.classList.toggle("Invalido")
    }
}