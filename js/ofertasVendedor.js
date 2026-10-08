
const nombreAuto = document.querySelector("#nombreAutoOfertado");

const montoRecibido = document.querySelector("#montoRecibido");

const botonesOferta = document.querySelector("#botonesOferta");

const aceptarOferta = document.querySelector("#aceptarOferta");

const rechazarOferta = document.querySelector("#rechazarOferta");

const ofertaGuardada = localStorage.getItem("ofertaToyota");

const estadoOferta = localStorage.getItem("estadoOfertaToyota");


if (ofertaGuardada !== null) {

    nombreAuto.textContent = "Auto: Toyota Corolla Cross";

    montoRecibido.textContent = "Oferta recibida: $" + ofertaGuardada;

    if (estadoOferta === "aceptada") {

        montoRecibido.textContent = "Oferta aceptada: $" + ofertaGuardada;

    } else if (estadoOferta === "rechazada") {

        montoRecibido.textContent = "Oferta rechazada: $" + ofertaGuardada;

    } else {

        botonesOferta.classList.remove("oculto");

    }

}


function aceptar() {

    localStorage.setItem("estadoOfertaToyota", "aceptada");

    montoRecibido.textContent = "Oferta aceptada: $" + ofertaGuardada;

    botonesOferta.classList.add("oculto");

}


function rechazar() {

    localStorage.setItem("estadoOfertaToyota", "rechazada");

    montoRecibido.textContent = "Oferta rechazada: $" + ofertaGuardada;

    botonesOferta.classList.add("oculto");

}


aceptarOferta.addEventListener("click", aceptar);

rechazarOferta.addEventListener("click", rechazar);
