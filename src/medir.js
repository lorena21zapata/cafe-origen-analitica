const analitica = require("./analitica");
const {generarVentas} = require("./generador");
const {
    totalVendidoInstrumentado,
    ventaMayorInstrumentada,
    totalPorCiudadInstrumentada,
    primeraVentaInstrumentada
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
}


