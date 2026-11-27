const analitica = require("./analitica");
const {generarVentas} = require("./generador");
const {
    totalVendidoInstrumentado,
    ventaMayorInstrumentada,
    totalPorCiudadInstrumentada,
    primeraVentaInstrumentada,
    clientesRecurrentes,
} = require("./analitica");
const ventas = require("./datos.js")


const contadorTotal = { operaciones: 0 };
const contadorMayor = { operaciones: 0 };
const contadorPorCiudad = { operaciones: 0 };

totalVendidoInstrumentado(ventas, contadorTotal);
ventaMayorInstrumentada(ventas, contadorMayor);
totalPorCiudadInstrumentada(ventas, contadorPorCiudad);


console.table({
    totalVendido: contadorTotal.operaciones,
    ventaMayor: contadorMayor.operaciones,
    totalPorCiudad: contadorPorCiudad.operaciones,
});


const muestra = [100, 1000, 10000, 100000];

/*
for (const n of muestra) {
    const ventas = generarVentas(n); 
    const contadorTotal = { operaciones: 0 };
    const contadorMayor = { operaciones: 0 };
    const contadorPorCiudad = { operaciones: 0 };
    const contadorPrimera = { operaciones: 0 };

    totalVendidoInstrumentado(ventas, contadorTotal);
    ventaMayorInstrumentada(ventas, contadorMayor);
    totalPorCiudadInstrumentada(ventas, contadorPorCiudad);
    primeraVentaInstrumentada(ventas, contadorPrimera);
    console.table({
    ventas: n,
    totalVendido: contadorTotal.operaciones,
    ventaMayor: contadorMayor.operaciones,
    totalPorCiudad: contadorPorCiudad.operaciones,
    primeraVenta: contadorPrimera.operaciones,
});
} */


const arregloPrueba = generarVentas(16000);

console.time("prueba-1000");
clientesRecurrentes(arregloPrueba);
console.timeEnd("prueba-1000");


const cantidades = [1000, 2000, 4000, 8000, 16000, 100000];

for (const n of cantidades) {
    const ventasPrueba = generarVentas(n);

    console.time(`prueba-${n}`);
    clientesRecurrentes(ventasPrueba);
    console.timeEnd(`prueba-${n}`);
}