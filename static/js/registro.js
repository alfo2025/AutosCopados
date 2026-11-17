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
const fechaInput = document.querySelector('#fecha')
const fechaMensaje = document.querySelector('#MensajeFecha')
const dniNumeroInput = document.querySelector('#DNI')
const dniMensaje = document.querySelector('#MensajeDni')
const dniFotosInput = document.getElementsByClassName('FotoDNI')
const dniFotosMensaje = document.getElementsByClassName('FotosDNIMensaje')
const iconosValidacion = document.getElementsByClassName('iconoIMG')
const formulario = document.querySelector('#formulario-registro')
const imgRegistro = document.querySelector('#imgRegistro')
const mensaje = document.querySelector('#MensajeAprobacion')


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
    if(claveInput.value.trim().length > 0)
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

function validarFecha(){
    fechaValida = false
    fechaSeleccionada = new Date(fechaInput.value)
    fechaActual = new Date()
    Años = fechaActual.getFullYear() - fechaSeleccionada.getFullYear()

    if(fechaActual.getMonth() < fechaSeleccionada.getMonth())
    {
        Años = Años - 1
        console.log(Años)
    }else
    if(fechaActual.getMonth() == fechaSeleccionada.getMonth()){
        if(fechaActual.getDate() < fechaSeleccionada.getDate()){
            Años = Años - 1
        }
    }
    
    
    if(Años < 18){
        fechaValida = false
        cambiarVisual(fechaValida,iconosValidacion[5],fechaInput,fechaMensaje,"Eres menor de edad, no puedes registrarte")
    }
    else
    {
        if(Años > 75)
        {
            fechaValida = false
            cambiarVisual(fechaValida,iconosValidacion[5],fechaInput,fechaMensaje,"No te pases pe, seras viejo, pero no jurasico >:c")
        }
        else
        {
            fechaValida = true
            cambiarVisual(fechaValida,iconosValidacion[5],fechaInput,fechaMensaje,"Cumples la edad necesaria")
        }
    }

    if(isNaN(Años))
    {
        fechaValida = false
        cambiarVisual(fechaValida,iconosValidacion[5],fechaInput,fechaMensaje,"No ingresaste una fecha")

    }

    return fechaValida
}

function ValidarNumeroDNI(){
    dniValido = false
    if(dniNumeroInput.value >= 10000000 && dniNumeroInput.value <= 99999999)
    {
        dniValido = true
        cambiarVisual(dniValido, iconosValidacion[6],dniNumeroInput,dniMensaje,"DNI validado")
    }
    else{
        cambiarVisual(dniValido, iconosValidacion[6],dniNumeroInput,dniMensaje,"DNI Inservible")
    }

    if(dniValido){
        document.querySelector('#FotosDNI').classList.remove('oculto')

    }
    ValidarFotosDni()
    return dniValido
}

function ValidarFotosDni(){
    fotosValidas = false
    f1 = false
    f2 = false

    if(dniFotosInput[0].files.length > 0)
    {
        f1 = true
        cambiarVisual(f1,iconosValidacion[7],dniFotosInput[0],dniFotosMensaje[0],'DNI FRENTE COMPLETA')
    }else
    { 
        cambiarVisual(f1,iconosValidacion[7],dniFotosInput[0],dniFotosMensaje[0],'DNI FRENTE INCOMPLETA')
    }

    if(dniFotosInput[1].files.length > 0)
    {
        f2 = true
        cambiarVisual(f2,iconosValidacion[8],dniFotosInput[1],dniFotosMensaje[1],'DNI REVERSA COMPLETA')
    }else
    { 
        cambiarVisual(f2,iconosValidacion[8],dniFotosInput[1],dniFotosMensaje[1],'DNI REVERSA INCOMPLETA')
    }

    if(f1 && f2)
        fotosValidas = true

    return fotosValidas
}

nombreInput.addEventListener('keyup', validarNombre)
apellidoInput.addEventListener('keyup', validarApellido)
correoInput.addEventListener('keyup', validarCorrreo)
claveInput.addEventListener('keyup', validarClave)
claveConfirmarInput.addEventListener('keyup', validacionClaveCompleta)
fechaInput.addEventListener('change', validarFecha)
dniNumeroInput.addEventListener('keyup', ValidarNumeroDNI)
dniFotosInput[0].addEventListener('change', ValidarFotosDni)
dniFotosInput[1].addEventListener('change', ValidarFotosDni)
fechaInput.value = new Date().toLocaleDateString('en-CA')

function validarFormulario(evento){
    
    nombre = validarNombre()
    apellido = validarApellido()
    correo = validarCorrreo()
    clave = validarClave()
    claveC = validacionClaveCompleta()
    fecha = validarFecha()
    dni = ValidarNumeroDNI()
    fotos = ValidarFotosDni()

    if(nombre && apellido && correo && clave && claveC && fecha && dni && fotos){
        mensaje.textContent = "Formulario ingresado Correctamente"
        mensaje.classList.remove("Invalido")
        mensaje.classList.add("valido")
        evento.preventDefault()
        imgRegistro.src = "./img/Anuncio/anuncio3.webp"
    }
    else{
        mensaje.textContent = "Los datos ingresados son erroneos o no cumplen las condiciones, vuelva a intentarlo"
        mensaje.classList.add("Invalido")
        mensaje.classList.remove("valido")
        evento.preventDefault()
        imgRegistro.src = "./img/sospechoso.jpg"
    }
}

formulario.addEventListener("submit", (e) => validarFormulario(e));