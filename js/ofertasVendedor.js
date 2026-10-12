
const aceptar1 = document.querySelector("#aceptar1");
const aceptar2 = document.querySelector("#aceptar2");
const aceptar3 = document.querySelector("#aceptar3");
const aceptar4 = document.querySelector("#aceptar4");

const rechazar1 = document.querySelector("#rechazar1");
const rechazar2 = document.querySelector("#rechazar2");
const rechazar3 = document.querySelector("#rechazar3");
const rechazar4 = document.querySelector("#rechazar4");

const oferta1 = document.querySelector("#oferta1");
const oferta2 = document.querySelector("#oferta2");
const oferta3 = document.querySelector("#oferta3");
const oferta4 = document.querySelector("#oferta4");

const estado1 = document.querySelector("#estado1");
const estado2 = document.querySelector("#estado2");
const estado3 = document.querySelector("#estado3");
const estado4 = document.querySelector("#estado4");

function aceptarOferta1() {
    estado1.textContent = "ACEPTADO";
    aceptar1.classList.add("oculto");
    rechazar1.classList.add("oculto");
}

function aceptarOferta2() {
    estado2.textContent = "ACEPTADO";
    aceptar2.classList.add("oculto");
    rechazar2.classList.add("oculto");
}

function aceptarOferta3() {
    estado3.textContent = "ACEPTADO";
    aceptar3.classList.add("oculto");
    rechazar3.classList.add("oculto");
}

function aceptarOferta4() {
    estado4.textContent = "ACEPTADO";
    aceptar4.classList.add("oculto");
    rechazar4.classList.add("oculto");
}

function rechazarOferta1() {
    oferta1.classList.add("oculto");
}

function rechazarOferta2() {
    oferta2.classList.add("oculto");
}

function rechazarOferta3() {
    oferta3.classList.add("oculto");
}

function rechazarOferta4() {
    oferta4.classList.add("oculto");
}

aceptar1.addEventListener("click", aceptarOferta1);
aceptar2.addEventListener("click", aceptarOferta2);
aceptar3.addEventListener("click", aceptarOferta3);
aceptar4.addEventListener("click", aceptarOferta4);

rechazar1.addEventListener("click", rechazarOferta1);
rechazar2.addEventListener("click", rechazarOferta2);
rechazar3.addEventListener("click", rechazarOferta3);
rechazar4.addEventListener("click", rechazarOferta4);
