export function calcularDescuento(precio, descuento) {
    if (descuento < 0) return 0; // Si el descuento es negativo, devolvemos 0
    const resultado = precio - (precio * descuento) / 100;
    return Math.max(resultado, 0); // Nunca menor a 0
}