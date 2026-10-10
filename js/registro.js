const PatronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const nombreInput = document.querySelector('#nombre')
const nombreMensaje = document.querySelector('#MensajeNombre')
const apellidoInput = document.querySelector('#apellido')
const apellidoMensaje = document.querySelector('#MensajeApellido')
const correoInput = document.querySelector('#correo')
const correoMensaje = document.querySelector('#MensajeCorreo')
const claveInput = document.querySelector('#clave')
const claveMensaje = document.querySelector('#MensajeClave')
const completarClave = document.querySelector('#CompletarClave')
const claveConfirmarInput = document.querySelector('#claveConfirmar')
const claveConfirmarMensaje = document.querySelector('#MensajeClaveConfirmacion')

const iconosValidacion = document.getElementsByClassName('iconoIMG')

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

function validarNombre(){
    const nombreLimpio = nombreInput.value.trim()
    nombreValido = false
    if(nombreLimpio.length >=4)
    {
        nombreValido = true
        cambiarVisual(nombreValido,iconosValidacion[0],nombreInput,nombreMensaje,"Nombre valido")
    }
    else{
        nombreValido = false
        cambiarVisual(nombreValido,iconosValidacion[0],nombreInput,nombreMensaje,"Nombre invalido")
    }
    return nombreValido
}

function validarApellido(){
    const apellidoLimpio = apellidoInput.value.trim()
    apellidoValido = false
    if(apellidoLimpio.length >=4)
    {
        apellidoValido = true
        cambiarVisual(apellidoValido,iconosValidacion[1],apellidoInput,apellidoMensaje,"Apellido Valido")
    }
    else{
        apellidoValido = false
        cambiarVisual(apellidoValido,iconosValidacion[1],apellidoInput,apellidoMensaje,"Apellido Invalido")
    }
    return nombreValido
}

function validarCorrreo() {
    const correoLimpio = correoInput.value.trim()
    correoValido= false;
    if(correoLimpio.length >= 3)
        if(PatronCorreo.test(correoLimpio)){
            correoValido = true
            cambiarVisual(correoValido, iconosValidacion[2], correoInput, correoMensaje,'Mail ingresado de manera correcta')
        }
        else{
            correoValido = false
            cambiarVisual(correoValido, iconosValidacion[2], correoInput, correoMensaje,'Error, no escribio bien el correo')
            
        }
    else{
        correoValido = false
        cambiarVisual(correoValido, iconosValidacion[2], correoInput, correoMensaje,'Error, no pusite la cantidad nesesaria')
    }
    return  correoValido
}

function validarClave(){
    const claveLimpio = claveInput.value.trim()
    claveValida = false

    if(claveLimpio.length >= 8){
        claveValida = true
        cambiarVisual(claveValida, iconosValidacion[3], claveInput, claveMensaje, "clave valida")
        validacionClaveCompleta()
    }
    else{
        claveValida = false
        cambiarVisual(claveValida, iconosValidacion[3], claveInput, claveMensaje, "La contraseña debe ser mayor a 8 caracteres, le faltan "+(8-claveLimpio.length))
    }
    return claveValida
}

function validacionClaveCompleta(){
    CompletarClave.classList.remove('oculto')
    claveCompletaValida = false
    if(claveConfirmarInput.value == claveInput.value)
    {
        claveCompletaValida = true
        cambiarVisual(claveCompletaValida, iconosValidacion[4], claveConfirmarInput, claveConfirmarMensaje, "Contraseña confirmada")
    }
    else{
        claveCompletaValida = false
        cambiarVisual(claveCompletaValida, iconosValidacion[4], claveConfirmarInput, claveConfirmarMensaje, "La contraseña no es igual")
    }
    return claveCompletaValida
}

nombreInput.addEventListener('keyup', validarNombre)
apellidoInput.addEventListener('keyup', validarApellido)
correoInput.addEventListener('keyup', validarCorrreo)
claveInput.addEventListener('keyup', validarClave)
claveConfirmarInput.addEventListener('keyup', validacionClaveCompleta)