
const botonOfertar = document.querySelector("#id-ofertar");

const formularioOferta = document.querySelector("#id-formulario-oferta");

botonOfertar.addEventListener("click", mostrarFormulario);

function mostrarFormulario() {

    formularioOferta.classList.toggle("oculto");

}


const formulario = document.querySelector("#id-oferta");
const montoOferta = document.querySelector("#id-monto-oferta");
const errorMonto = document.querySelector("#id-error-monto");
const cuotasOferta = document.querySelector("#id-cuotas-oferta");
const errorCuotas = document.querySelector("#id-error-cuotas");
const mensajeOferta = document.querySelector("#id-mensaje-oferta");


function validarMonto() {

    if (Number(montoOferta.value) > 5000000) {
        montoOferta.classList.remove("invalido");
        errorMonto.textContent = "";
        return true;
    } else {
        montoOferta.classList.add("invalido");
        errorMonto.textContent = "La oferta debe superar los $5.000.000";
        return false;
    }

}


function validarCuotas() {

    if (cuotasOferta.value !== "") {
        cuotasOferta.classList.remove("invalido");
        errorCuotas.textContent = "";
        return true;
    } else {
        cuotasOferta.classList.add("invalido");
        errorCuotas.textContent = "Seleccionar una cantidad de cuotas.";
        return false;
    }

}


function enviarOferta(evento) {

    evento.preventDefault();

    const montoValido = validarMonto();
    const cuotasValidas = validarCuotas();

    if (montoValido && cuotasValidas) {
        mensajeOferta.textContent = "Oferta enviada correctamente.";
    } else {
        mensajeOferta.textContent = "Revisar los datos ingresados.";
    }

}


montoOferta.addEventListener("input", validarMonto);
formulario.addEventListener("submit", enviarOferta);




