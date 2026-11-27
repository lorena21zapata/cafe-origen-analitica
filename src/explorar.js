const ventas = require("./datos");
console.log(ventas.length);

console.log(ventas[0])
console.log(ventas[ventas.length-1])
console.log(ventas[4].producto)

console.table(ventas)


const ventas = [
    { cliente: "C01", producto: "Café Huila" },
    { cliente: "C02", producto: "Café Nariño" },
    { cliente: "C01", producto: "Molino" },
    { cliente: "C03", producto: "Prensa" },
    { cliente: "C02", producto: "Café Huila" },
    { cliente: "C04", producto: "Café Nariño" }
];

