const ventas = require("./datos");
const analitica = require("./analitica");


function comparar (nombreIndicador, resulCiclo, resulMetodo){
  const sonIguales = JSON.stringify (resulCiclo) === JSON.stringify (resulMetodo);
  const veredicto = sonIguales ? "OK" : "DIFERENTE";
  console.log(`${nombreIndicador}: ${veredicto}`)
}


comparar(
  "Total vendido",
  analitica.totalVendido(ventas),
  analitica.totalVendidoM(ventas)
)

comparar(
  "Unidades Vendidas",
  analitica.unidadesVendidas(ventas),
  analitica.unidadesVendidasM(ventas)
)

comparar(
  "Ventas por ciudad",
  analitica.ventasPorCiudad(ventas, "Medellín"),
  analitica.ventasPorCiudadM(ventas,  "Medellín")
)