
const botonOfertar = document.querySelector("#botonOfertar");

const formularioOferta = document.querySelector("#formularioOferta");

const oferta = document.querySelector("#oferta");

const montoOferta = document.querySelector("#montoOferta");

const mensajeOferta = document.querySelector("#mensajeOferta");


function mostrarFormulario() {

    formularioOferta.classList.toggle("oculto");

}


function enviarOferta(evento) {

    evento.preventDefault();

    const monto = montoOferta.value;

    localStorage.setItem("ofertaToyota", monto);

    mensajeOferta.textContent = "Tu oferta de $" + monto + " fue enviada";

}


botonOfertar.addEventListener("click", mostrarFormulario);

oferta.addEventListener("submit", enviarOferta);
