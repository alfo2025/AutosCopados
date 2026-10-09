const IMG = document.querySelector("#ImagenSeleccionada")
const selectImg = document.querySelector("#SeleccionarIMG")

function actualizarIMG(archivo){
    console.log(archivo)
    if(archivo){
        url = URL.createObjectURL(archivo)
        console.log(url)
        IMG.src = url
    }
}

selectImg.addEventListener('change', (evento) => 
    {
        const a = evento.target.files[0]   
        actualizarIMG(a)
    })

    