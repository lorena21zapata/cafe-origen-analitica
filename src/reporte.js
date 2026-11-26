const ventas = require('./datos')

const {
    totalVendido,
    unidadesVendidas,
    totalPorCiudad,
    valorVenta,
    ventaMayor,
    ticketPromedio,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia
} = require("./analitica");

const pesos = valor => `$ ${Math.round(valor).toLocaleString("es-CO")}`;
console.log("\n==============================================");
console.log("       RESUMEN GENERAL DE VENTAS");
console.log("              CAFE ORIGEN");
console.log("==============================================\n");

console.log("1. RESUMEN GENERAL");
console.log("----------------------------------------------");
console.log(`Registros analizados: ${ventas.length}`);
console.log(`Unidades vendidas: ${unidadesVendidas(ventas)}`);
console.log(`Total vendido: ${pesos(totalVendido(ventas))}`);
console.log(`Ticket promedio: ${pesos(ticketPromedio(ventas))}`);

const mayor = ventaMayor(ventas);
console.log(`Venta de mayor valor: ${mayor ? `${mayor.producto} (${pesos(mayor.cantidad * mayor.precio)})` : "No hay ventas"}`);


console.log("\nUNIDADES VENDIDAS");
console.log("----------------------------------------------");
console.log("El Total de unidades vendidas en Cafe Origen es de : ",unidadesVendidas(ventas));


console.log("\nTOTAL VENDIDO");
console.log("----------------------------------------------");
console.log("El Total vendido contando todas las ventas es de : ",totalVendido(ventas).toLocaleString("es-CO"));


console.log("\nVENTAS POR CIUDAD");
console.log("----------------------------------------------");

const ciudades = totalPorCiudad(ventas);

for (const [ciudad, total] of Object.entries(ciudades)) {
    console.log(`${ciudad.padEnd(20)} ${pesos(total)}`);
}


console.log("\nUNIDADES POR PRODUCTO");
console.log("----------------------------------------------");
console.log("Unidades por producto :",unidadesPorProducto(ventas));


console.log("\nTOP 3 PRODUCTOS POR VALOR");
console.log("----------------------------------------------");
console.log("El top 3 de ventas es : ",topProductosPorValor(ventas,3))

console.log("\n5. COMPROBACIÓN DE VENTAS POR DÍA");
console.log("----------------------------------------------");
for (const fecha of ["2026-09-01", "2026-09-07"]) {
    const resumen = ventasDelDia(ventas, fecha);
    console.log(`${fecha}: ${resumen.cantidad} unidades | ${pesos(resumen.valor)}`);
}


console.log("\n==============================================");
console.log("             FIN DEL REPORTE");
console.log("==============================================");