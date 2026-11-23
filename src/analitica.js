const ventas = require("./datos");
console.log(ventas.length);

console.log(ventas[0])
console.log(ventas[ventas.length-1])
console.log(ventas[4].producto)

console.table(ventas)

const valorVenta = (venta) => venta.cantidad * venta.precio; 

console.log(valorVenta(ventas[ventas.length-1]));


const totalVendido = (ventas) => {
    totalVentas = 0;
    for (const venta of ventas ) {
        totalVentas = totalVentas + valorVenta(venta);
    }

    return totalVentas;
    }
    console.log("El total vendido fue:" + totalVendido(ventas))
    
const unidadesVendidas = (ventas) => {
    let unidadesTotales = 0
    for (const venta of ventas) {
        unidadesTotales = unidadesTotales + venta.cantidad 
    }
    return unidadesTotales;
    }
    console.log(unidadesVendidas(ventas));
    
const ventaMayor = (ventas) => {
    let mayor = null;
    for (const venta of ventas) {
        if (venta === null) continue;

        if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
};
console.log("La venta más alta es: ", ventaMayor(ventas));

const ticketPromedio = (ventas) => {
    let total = 0;
    let validas = 0; 
    for (const venta of ventas) {
        total = total + valorVenta(venta);
        validas ++
    }
    return validas === 0 ? 0 : total / validas;
}

console.log(ticketPromedio(ventas));

const ventasPorCiudad = (ventas, ciudad) => {
    let buscada = ciudad.trim().toLowerCase();
    let total = 0
    for (const venta of ventas) {
        let ciudadCorregida = venta.ciudad.trim().toLowerCase()
        if ( ciudadCorregida === buscada) {
        total = total + valorVenta(venta);
      
        }    
    }
      return total;
}

console.log ("Ventas por ciudad: " + ventasPorCiudad(ventas,"MEDELLÍN"));

