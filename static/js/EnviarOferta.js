const CuotasInput= document.querySelector("#Cuotas");
const MontoInput= document.querySelector("#Monto")
const MensajeMonto = document.querySelector("#MensajeMonto")
const formulario = document.querySelector("#formularioOferta")

function ValidarCuotas(){
    validoC = false

    if (CuotasInput.value < 0){
        CuotasInput.value = 0
    }
    
    if(CuotasInput.value > 12){
        CuotasInput.value = 12
    }
    return valido
}


function ValidarMonto(){
    valido = false
    if(MontoInput.value === '')
    {
        valido = false
        MensajeMonto.textContent = "No pusiste ningun monto :("
        MensajeMonto.classList.remove("oculto")
        MontoInput.classList.add("mal")
    }
    else
        if(MontoInput.value < 900000)
            {
                MontoInput.classList.add("mal")
                MensajeMonto.textContent = "No puedes poner precios debajo de 900.000,00$"
                MensajeMonto.classList.remove("oculto")
            }
            else{
                MontoInput.classList.remove("mal")
                MensajeMonto.classList.add("oculto")
                valido = true
            }
            
            
            return valido
        }
        
        
function ValidarOferta(evento){
    VM = ValidarMonto()
    VC = ValidarCuotas()

    if(VM && VC)
        evento.preventDefault()
    else
        evento.preventDefault()

}
        
function Condiciones(){
    CuotasInput.addEventListener('input', ValidarCuotas)
    MontoInput.addEventListener('input', ValidarMonto)
    formulario.addEventListener('submit',(e)=>  ValidarOferta(e))
    CuotasInput.value = 0
}

Condiciones()