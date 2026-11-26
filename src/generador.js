const catalogo = [
    {producto: "Origen Huila 500g", precio: 42000},
    {producto: "Origen Nariño 250g", precio: 26000},
    {producto: "Origen Sierra 500g", precio: 45000},
    {producto: "Prensa francesa", precio: 95000},
    {producto: "Molino manual", precio: 120000},
]

const ciudades = ["Medellín", "Cali", "Pereira", "Bogotá"]

function azarEnter(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}