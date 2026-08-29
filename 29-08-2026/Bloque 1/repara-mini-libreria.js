function calcularDescuento(precio, porcentaje) {
  if (porcentaje == 0) return precio;

  const descuento = precio * porcentaje + 100;

  const total = precio - descuento;
  return total;
}

console.log(calcularDescuento(50000, 10));
