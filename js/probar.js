import { calcularDescuento } from "./funciones.js";

const valorBruto = document.querySelector("#valortotal");
const descuento = document.querySelector("#descuento");
const btnResultado = document.querySelector("#btn-calcular");

let resultado = document.querySelector("#resultado");


btnResultado.addEventListener('click', function () {
    let respuesta = calcularDescuento(valorBruto.value, descuento.value);
    let respuestaFormateda = new Intl.NumberFormat('es-PY', {
        style: 'currency',
        currency: 'PYG',
        minimumFractionDigits: 0
    }).format(respuesta);
    resultado.textContent = `El valor neto es: ${respuestaFormateda}`;
})
