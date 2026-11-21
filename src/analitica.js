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
    let mayor = null
    for (venta of ventas) {
        if (venta === null || ventaValor > mayor )
            mayor = ventaValor 
    }
    return mayor
}