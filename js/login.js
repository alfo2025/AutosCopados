const nombre = document.querySelector("#nombre-usuario")
const mensaje = document.querySelector("#MensajeAprobacion")


function validarNombre() {
    const nombreLimpio = nombre.ariaValueMax.trim()
    
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