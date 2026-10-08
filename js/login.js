const PatronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const correoInput = document.querySelector("#correo-usuario")
const mensaje = document.querySelector("#MensajeAprobacion")
const mensajeCorreo = document.querySelector("#MensajeCorreo")
const claveInput =document.querySelector("#clave-usuario")
let claveValida = false;
let correoValido = false;
const mensajeClave = document.querySelector('#MensajeClave')
const iconosValidacion = document.getElementsByClassName('iconoIMG')
const formulario = document.querySelector("#formulario-turno")


function validarCorrreo() {
    const CorreoLimpio = correoInput.value.trim()

    if(CorreoLimpio.length >= 3)
        if(PatronCorreo.test(CorreoLimpio)){
            correoValido = true
            cambiarVisual(correoValido, iconosValidacion[0], correoInput, mensajeCorreo,'Mail ingresado de manera correcta')
        }
        else{
            correoValido = false
            mensajeCorreo.textContent = ""
            cambiarVisual(correoValido, iconosValidacion[0], correoInput, mensajeCorreo,'Error, no escribio bien el correo')
            
        }
    else{
        correoValido = false
        cambiarVisual(correoValido, iconosValidacion[0], correoInput, mensajeCorreo,'Error, no pusite la cantidad nesesaria')
    }
}

function validarClave(){
    const claveLimpio = claveInput.value.trim()
    
    if(mensajeClave.classList.value == 'oculto'){
        mensajeClave.classList.remove("oculto")
    }

    if(claveLimpio.length >= 8){
        claveValida = true
        cambiarVisual(claveValida, iconosValidacion[1], claveInput, mensajeClave, "clave valida")
    }
    else{
        claveValida = false
        cambiarVisual(claveValida, iconosValidacion[1], claveInput, mensajeClave, "La contraseña debe ser mayor a 8 caracteres")
    }

}

function cambiarVisual(condicion, icono, input, mens, textMensaje){
    mens.textContent = textMensaje
    if(mens.classList.value == 'oculto'){
        mens.classList.remove('oculto')
    } 
    if(condicion)
    {
        input.classList.remove("advertencia")
        mens.classList.remove("Invalido")
        mens.classList.add("valido")
        icono.classList.add('cumpleIMG')
        icono.classList.remove('NOcumpleIMG')
    }
    else{
        input.classList.add('advertencia')
        mens.classList.remove('valido')
        mens.classList.add('Invalido')
        icono.classList.add('NOcumpleIMG')
        icono.classList.remove('cumpleIMG')
    }
}

claveInput.addEventListener('keyup', (e) => validarClave())
correoInput.addEventListener('keyup', (e) => validarCorrreo())


function validarFormulario(evento){
    validarCorrreo()
    validarClave()

    if(correoValido && claveValida){
        mensaje.textContent = "Formulario ingresado Correctamente"
        mensaje.classList.toggle("Invalido")
        evento.preventDefault()
    }
    else{
        mensaje.textContent = "Los datos ingresados son erroneos o no cumplen las condiciones, vuelva a intentarlo"
        mensaje.classList.toggle("Invalido")
        evento.preventDefault()
    }
}

formulario.addEventListener("submit", (e) => validarFormulario(e));