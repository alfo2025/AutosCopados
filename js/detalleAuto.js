const parametros = new URLSearchParams(window.location.search)

const idAuto = Number(parametros.get("id"))
const rol = parametros.get("rol")


const autos = [

    {
        id: 1,
        marca: "Toyota",
        modelo: "Corolla Cross",
        nombre: "Toyota Corolla Cross",
        precio: "$42.212.000",
        anio: 2023,
        kilometros: "25.000 km",
        combustible: "Nafta",
        transmision: "Automática",
        vendedor: "Alonsodsas",
        imagen: "./img/imagen1.webp",

        comentarios: [
            {
                usuario: "Guerrero Ramirez",
                fecha: "19/03/2025",
                texto: "¿Qué motor tiene?"
            },

            {
                usuario: "Santiago Dorrego",
                fecha: "20/03/2025",
                texto: "¿Puedo comprarlo en cuotas?"
            }
        ]
    },


    {
        id: 2,
        marca: "Chevrolet",
        modelo: "Tracker",
        nombre: "Chevrolet Tracker",
        precio: "$33.632.000",
        anio: 2022,
        kilometros: "38.000 km",
        combustible: "Nafta",
        transmision: "Automática",
        vendedor: "RomeroRam",
        imagen: "./img/imagen2.webp",

        comentarios: [
            {
                usuario: "Pedro Gomez",
                fecha: "21/03/2025",
                texto: "¿Tiene cámara de retroceso?"
            },

            {
                usuario: "Lucas Fernandez",
                fecha: "22/03/2025",
                texto: "¿Está disponible todavía?"
            }
        ]
    },


    {
        id: 3,
        marca: "Volkswagen",
        modelo: "Nivus",
        nombre: "Volkswagen Nivus",
        precio: "$31.252.000",
        anio: 2021,
        kilometros: "47.000 km",
        combustible: "Nafta",
        transmision: "Automática",
        vendedor: "JuanCarlos",
        imagen: "./img/imagen3.webp",

        comentarios: [
            {
                usuario: "Martin Lopez",
                fecha: "23/03/2025",
                texto: "¿Aceptan permuta?"
            }
        ]
    },


    {
        id: 4,
        marca: "Mercedes Benz",
        modelo: "Clase C",
        nombre: "Mercedes Benz Clase C",
        precio: "$42.212.000",
        anio: 2020,
        kilometros: "51.000 km",
        combustible: "Nafta",
        transmision: "Automática",
        vendedor: "Alonsodsas",
        imagen: "./img/imagen4.webp",

        comentarios: [
            {
                usuario: "Federico Perez",
                fecha: "24/03/2025",
                texto: "¿Tiene service oficial?"
            },

            {
                usuario: "Ignacio Torres",
                fecha: "25/03/2025",
                texto: "¿Qué versión del Clase C es?"
            }
        ]
    },


    {
        id: 5,
        marca: "Suzuki",
        modelo: "Jimny",
        nombre: "Suzuki Jimny",
        precio: "$35.780.000",
        anio: 2024,
        kilometros: "12.000 km",
        combustible: "Nafta",
        transmision: "Manual",
        vendedor: "Alfonso Ko",
        imagen: "./img/imagen22.webp",

        comentarios: [
            {
                usuario: "Matias Romero",
                fecha: "26/03/2025",
                texto: "¿Es 4x4?"
            },

            {
                usuario: "Franco Diaz",
                fecha: "27/03/2025",
                texto: "¿Cuánto consume en ciudad?"
            }
        ]
    },


    {
        id: 6,
        marca: "Volkswagen",
        modelo: "Nivus",
        nombre: "Volkswagen Nivus",
        precio: "$29.990.000",
        anio: 2020,
        kilometros: "62.000 km",
        combustible: "Nafta",
        transmision: "Automática",
        vendedor: "Santi Gauna",
        imagen: "./img/imagen3.webp",

        comentarios: [
            {
                usuario: "Rodrigo Suarez",
                fecha: "28/03/2025",
                texto: "¿Tiene algún choque?"
            }
        ]
    }

]


const autoSeleccionado = autos.find(function(auto) {

    return auto.id === idAuto

})


if (autoSeleccionado) {

    document.querySelector("#nombreAuto").textContent =
        autoSeleccionado.nombre

    document.querySelector("#precioAuto").textContent =
        autoSeleccionado.precio

    document.querySelector("#marcaAuto").textContent =
        autoSeleccionado.marca

    document.querySelector("#modeloAuto").textContent =
        autoSeleccionado.modelo

    document.querySelector("#anioAuto").textContent =
        autoSeleccionado.anio

    document.querySelector("#kilometrosAuto").textContent =
        autoSeleccionado.kilometros

    document.querySelector("#combustibleAuto").textContent =
        autoSeleccionado.combustible

    document.querySelector("#transmisionAuto").textContent =
        autoSeleccionado.transmision

    document.querySelector("#vendedorAuto").textContent =
        autoSeleccionado.vendedor

    document.querySelector("#imagenAuto").src =
        autoSeleccionado.imagen



    const listaComentarios =
        document.querySelector("#listaComentarios")


    listaComentarios.innerHTML = ""


    autoSeleccionado.comentarios.forEach(function(comentario) {

        const comentarioHTML = `
            <div class="comentario">

                <div class="NombreUsuarioComentador">

                    <img
                        src="./img/usuario.png"
                        alt="Usuario"
                    >

                    <h3>
                        ${comentario.usuario}
                    </h3>

                    <p>
                        ${comentario.fecha}
                    </p>

                </div>

                <p>
                    ${comentario.texto}
                </p>

            </div>
        `

        listaComentarios.innerHTML += comentarioHTML

    })

}
else {

    document.querySelector("#nombreAuto").textContent =
        "Auto no encontrado"

}



if (rol === "comprador") {

    document
        .querySelector("#opcionesComprador")
        .classList.remove("oculto")

}


if (rol === "vendedor") {

    document
        .querySelector("#opcionesVendedor")
        .classList.remove("oculto")

}


if (rol === "administrador") {

    document
        .querySelector("#opcionesAdministrador")
        .classList.remove("oculto")

}