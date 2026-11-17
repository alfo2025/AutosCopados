const IMG = document.querySelector("#ImagenSeleccionada")
const selectImg = document.querySelector("#SeleccionarIMG")
const iconosValidacion = document.getElementsByClassName('iconoIMG')
const fotoMensaje = document.querySelector('#MensajeFoto')
const nombreInput = document.querySelector('#nombre')
const nombreMensaje = document.querySelector('#MensajeNombre')
const fechaInput = document.querySelector('#año')
const fechaMensaje = document.querySelector('#añoMensaje')
fechaInput.value = new Date().toLocaleDateString('en-CA')
const kmInput = document.querySelector('#kilometrosI')
const kmMensaje = document.querySelector('#kmMensaje')
const marcaInput = document.querySelector('#marca')
const marcaMensaje = document.querySelector('#MensajeMarca')
const mensaje = document.querySelector('#MensajeFormulario')
const formulario = document.querySelector('#formulario-PublicarAuto')

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

function actualizarIMG(archivo){
    console.log(archivo)
    if(archivo){
        url = URL.createObjectURL(archivo)
        console.log(url)
        IMG.src = url
    }
}

selectImg.addEventListener('change', (evento) =>  validarFotoAuto(evento))
nombreInput.addEventListener('keyup', validarNombre)
fechaInput.addEventListener('change', validarfecha)
kmInput.addEventListener('keyup', validarKM)
kmInput.addEventListener('change', validarKM)
marcaInput.addEventListener('change', validarMarca)


function validarFotoAuto(evento){
    fotoValida = false
    if(selectImg.files.length == 0){
        cambiarVisual(fotoValida, iconosValidacion[0], selectImg, fotoMensaje, "No seleccionaste una imagen.")
        console.log('no hay archivo')
    }
    else{
        fotoValida = true
        const a = evento.target.files[0]   
        actualizarIMG(a)
        cambiarVisual(fotoValida,iconosValidacion[0],selectImg, fotoMensaje,"Imagen de auto ingresada.")
    }
}

function validarNombre(){
    const nombreLimpio = nombreInput.value.trim()
    nombreValido = false
    if(nombreLimpio.length >=4)
    {
        nombreValido = true
        cambiarVisual(nombreValido,iconosValidacion[1],nombreInput,nombreMensaje,"Nombre valido")
    }
    else{
        nombreValido = false
        cambiarVisual(nombreValido,iconosValidacion[1],nombreInput,nombreMensaje,"Nombre invalido")
    }
    return nombreValido
}

function validarfecha(){
    fechaValida = false
    fechaSeleccionada = new Date(fechaInput.value)
    fechaActual = new Date()

    if(fechaSeleccionada.getFullYear() < 1990){
        cambiarVisual(fechaValida, iconosValidacion[2], fechaInput, fechaMensaje, 'No aceptamos autos que salieron antes de 1990')
    }
    else
    {
        if(fechaSeleccionada.getFullYear() == fechaActual.getFullYear())
        {
            if(fechaSeleccionada.getMonth() > fechaActual.getMonth() || fechaSeleccionada.getMonth() == fechaActual.getMonth() && fechaSeleccionada.getDate() > fechaActual.getDate())
            {
                cambiarVisual(fechaValida, iconosValidacion[2], fechaInput, fechaMensaje, 'No aceptamos autos que salieron en el futuro')
            }
            else{
                fechaValida = true 
                cambiarVisual(fechaValida, iconosValidacion[2], fechaInput, fechaMensaje, 'Fecha validada')
            }
        }
        else{
            if(fechaSeleccionada.getFullYear() > fechaActual.getFullYear())
            {
                cambiarVisual(fechaValida, iconosValidacion[2], fechaInput, fechaMensaje, 'No aceptamos autos que salieron en el futuro')
            }
            else{
                fechaValida = true
                cambiarVisual(fechaValida, iconosValidacion[2], fechaInput, fechaMensaje, 'Fecha validada')
            }
        }
        
    }
    return fechaValida
}

function validarKM()
{
    kmValido = false

    if(kmInput.value >= 10000 && kmInput.value <= 15000){
        kmValido = true
        cambiarVisual(kmValido,iconosValidacion[3],kmInput,kmMensaje,'Estandar / Equilibrado')
    }
    else
    if(kmInput.value > 15000 && kmInput.value <= 150000){
        kmValido = true
        cambiarVisual(kmValido,iconosValidacion[3],kmInput,kmMensaje,'Pasable')
    }
    else
    if(kmInput.value > 150000 && kmInput.value <= 270000){
        kmValido = true
        cambiarVisual(kmValido,iconosValidacion[3],kmInput,kmMensaje,'Limites Criticos')
    }
    else{
        cambiarVisual(kmValido,iconosValidacion[3],kmInput,kmMensaje,'No se permite ese kilometraje')
    }
    return kmValido
}

function validarMarca(){
    marcaValida = false

    if(marcaInput.value == "ninguno"){
        cambiarVisual(marcaValida, iconosValidacion[4], marcaInput, marcaMensaje, 'Debes seleccionar una marca')
    }
    else{
        marcaValida = true
        cambiarVisual(marcaValida, iconosValidacion[4], marcaInput, marcaMensaje, 'Seleccionaste '+marcaInput.value)
    
    }
}

function validarFormulario(evento){
    foto = validarFotoAuto()
    nombre = validarNombre()
    año = validarfecha()
    km = validarKM()
    marca = validarMarca()

    if(foto && nombre && año && km && marca){
        mensaje.textContent = "Formulario ingresado Correctamente"
        mensaje.classList.remove("Invalido")
        mensaje.classList.add("valido")
        evento.preventDefault()
    }
    else{
        mensaje.textContent = "Los datos ingresados son erroneos o no cumplen las condiciones, vuelva a intentarlo"
        mensaje.classList.add("Invalido")
        mensaje.classList.remove("valido")
        evento.preventDefault()
    }
}


formulario.addEventListener("submit", (e) => validarFormulario(e));