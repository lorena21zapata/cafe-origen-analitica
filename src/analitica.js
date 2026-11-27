const ventas = require("./datos");
const valorVenta = (venta) => venta.cantidad * venta.precio; 



const totalVendido = (ventas) => {
    let totalVentas = 0;
    for (const venta of ventas ) {
        totalVentas = totalVentas + valorVenta(venta);
    }

    return totalVentas;
    }
   
const unidadesVendidas = (ventas) => {
    let unidadesTotales = 0
    for (const venta of ventas) {
        unidadesTotales = unidadesTotales + venta.cantidad; 
    }
    return unidadesTotales;
    }

const ventaMayor = (ventas) => {
    let mayor = null;
     for (const venta of ventas) {
        if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
};


const ticketPromedio = (ventas) => {
    let total = 0;
    let validas = 0; 
    for (const venta of ventas) {
        if (venta.cantidad > 0) {
        total = total + valorVenta(venta);
        validas ++;
        }
    }
    return validas === 0 ? 0 : total / validas;
}


function ventasPorCiudad(ventas, ciudad) {
    const ciudadBuscada = ciudad.trim().toLocaleLowerCase("es-CO");
    let total = 0;

    for (const venta of ventas) {
        const ciudadVenta = venta.ciudad.trim().toLocaleLowerCase("es-CO");

        if (ciudadVenta === ciudadBuscada) {
            total += valorVenta(venta);
        }
    }

    return total;
}

function totalVendidoM (ventas) {
    return ventas.reduce((total, venta) => {
        return total + valorVenta(venta);}, 0);
}

function unidadesVendidasM (ventas) {
    return ventas.reduce((unidades, venta) => {
        return unidades + venta.cantidad;}, 0);
}


const ventasPorCiudadM = (ventas) => {
    const acumulador = {};

    for (const venta of ventas) {
        const ciudad = venta.ciudad.trim();
        const clave = ciudad.toLowerCase();

        if (acumulador[clave] === undefined) {
            acumulador[clave] = {
                ciudad: ciudad,
                total: 0
            };
        }

        acumulador[clave].total += valorVenta(venta);
    }

    return Object.values(acumulador);
};




function totalPorCiudad(ventas, ) {
    return ventas.reduce((totales, venta) => {
        const ciudad = venta.ciudad.trim().toLocaleLowerCase("es-CO");
        const nombreCiudad = ciudad.replace(/^./u, letra => letra.toLocaleUpperCase("es-CO"));
         
        if (totales[nombreCiudad] === undefined) {
            totales[nombreCiudad] = 0;
        }
      
        totales[nombreCiudad] += valorVenta(venta);
        return totales;
    }, {});
}

function unidadesPorProducto(ventas) {

    let acum = {};

    for (const venta of ventas) {

        if (acum[venta.producto] === undefined) {
            acum[venta.producto] = 0;
        }

        acum[venta.producto] += venta.cantidad;
    }

    return acum;
}

function topProductosPorValor(ventas, k) {

    let acum = {};


    for (const venta of ventas) {

        if (acum[venta.producto] === undefined) {
            acum[venta.producto] = 0;
        }

        acum[venta.producto] += valorVenta(venta);
    }


    let productos = Object.entries(acum);


    productos.sort((a, b) => b[1] - a[1]);


    return productos.slice(0, k);
}



function ventasDelDia(ventas, fecha) {
    return ventas.reduce((resumen, venta) => {
        if (venta.fecha === fecha) {
            resumen.cantidad += venta.cantidad;
            resumen.valor += valorVenta(venta);
        }

        return resumen;
    }, { cantidad: 0, valor: 0 });
}

 function totalVendidoInstrumentado(ventas, contadorTotal) {
    let total = 0
    for (const venta of ventas) {
        total += valorVenta(venta)
        contadorTotal.operaciones++
    }
    return total 
 }

 function ventaMayorInstrumentada(ventas, contadorMayor) {
    let mayor = null
    for (const venta of ventas) {
        contadorMayor.operaciones++; // Visitar una venta
        contadorMayor.operaciones++; // Comprobar si mayor es null

        if (mayor === null) {
            mayor = venta;
        } else {
            contadorMayor.operaciones++; // Comparar los valores

            if (valorVenta(venta) > valorVenta(mayor)) {
                mayor = venta;
            }
        }
    }

    return mayor;
}

function totalPorCiudadInstrumentada (ventas, contadorPorCiudad) {
    return ventas.reduce ((totales, venta) => {
        contadorPorCiudad.operaciones++;

        const ciudad = venta.ciudad.trim().toLocaleLowerCase("es-CO");
        const nombreCiudad = ciudad.replace(/^./u, letra => letra.toLocaleUpperCase("es-CO"));

        contadorPorCiudad.operaciones++;

        if (totales[nombreCiudad] === undefined) {
            totales[nombreCiudad] = 0;
        }

        totales[nombreCiudad] += valorVenta(venta);

        return totales;
    }, {});
}

function primeraVentaInstrumentada(ventas, contadorPrimera) {
    contadorPrimera.operaciones++;

    if (ventas.length === 0) {
        return null;
    }

    contadorPrimera.operaciones++;
    return ventas[0];
}

function clientesRecurrentes(ventas) {
    const recurrentes = [];

    for (let i = 0; i < ventas.length; i++) {
        for (let j = i + 1; j < ventas.length; j++) {
            if (
                ventas[i].cliente === ventas[j].cliente &&
                !recurrentes.includes(ventas[i].cliente)
            ) {
                recurrentes.push(ventas[i].cliente);
            }
        }
    }

    return recurrentes;
}
function clientesRecurrentesSet(ventas){
    const vistos = new Set();
    const recurrentes = new Set();
    for (const v of ventas){
        if (vistos.has(v.cliente)) recurrentes.add(v.cliente);
        else vistos.add(v.cliente);
    }
    return [... recurrentes]

}

module.exports = {
    valorVenta,
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM,
    ventaMayor,
    ticketPromedio,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
    totalVendidoInstrumentado,
    ventaMayorInstrumentada,
    totalPorCiudadInstrumentada,
    primeraVentaInstrumentada,
    clientesRecurrentes,
};