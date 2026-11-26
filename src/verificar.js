const ventas = require('./datos');

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM
} = require('./analitica');


const totalCiclo = totalVendido(ventas);
const totalMetodo = totalVendidoM(ventas);

if (totalCiclo === totalMetodo) {
    console.log("Total vendido: OK");
} else {
    console.log("Total vendido: DIFERENTE");
}

const unidadesCiclo = unidadesVendidas(ventas);
const unidadesMetodo = unidadesVendidasM(ventas);


if (unidadesCiclo === unidadesMetodo) {
    console.log("Unidades vendidas: OK");
} else {
    console.log("Unidades vendidas: DIFERENTE");
}

const ventasCiudadCiclo = VentasCiudad(ventas);
const ventasCiudadMetodo = ventasPorCiudadM(ventas);


if (ventasCiudadCiclo === ventasCiudadMetodo) {
    console.log("Ventas por ciudad: OK");
} else {
    console.log("Ventas por ciudad: DIFERENTE");
}