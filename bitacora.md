MiniReto 1 
Registro 1 Diccionario de datos
En el primer minireto del día 1 del trayecto 2, se pide que registre un diccionario de datos
Propiedad	Tipo de dato	Significado
id	Number	Identificador de la venta
fecha	String	Fecha en que se realizó la venta
cliente	String	Nombre del cliente
producto	String	Producto vendido
ciudad	String	Ciudad donde se realizó la venta
cantidad	Number	Unidades vendidas
precio   number  el valor del poducto 


Registro 2 Casos borde detectados
En la revisión de los datos, vi dos errores:
1. Los nombres de las ciudades tienen inconsistencias en la escritura, hay tildes o falta de tildes, luego hay mayúsculas 
y minúsculas.
2. En la venta 8, se registra como venta pero la cantidad es 0 
Nota: En la parte de clientes no vi ningún error en los datos 
3. cliente es un código, no un nombre.

Registro 3 Plan de los indicadores
 Pseudocódigo de los indicadores

valorVenta(venta)

RECIBIR una venta
CALCULAR cantidad * precio
DEVOLVER el resultado

totalVendido(ventas)

INICIAR total en 0
PARA CADA venta EN ventas
    total = total + valorVenta(venta)
FIN PARA
DEVOLVER total

unidadesVendidas(ventas)

INICIAR unidades en 0
PARA CADA venta EN ventas
    unidades = unidades + venta.cantidad
FIN PARA
DEVOLVER unidades

ventaMayor(ventas)

INICIAR mayor en null
PARA CADA venta EN ventas
    SI mayor es null O valorVenta(venta) > valorVenta(mayor)
        mayor = venta
    FIN SI
FIN PARA
DEVOLVER mayor

ticketPromedio(ventas)

INICIAR total en 0
INICIAR contadorValidas en 0
PARA CADA venta EN ventas
    SI venta.cantidad > 0
        total = total + valorVenta(venta)
        contadorValidas = contadorValidas + 1
    FIN SI
FIN PARA
SI contadorValidas es 0
    DEVOLVER 0
SI NO
    DEVOLVER total / contadorValidas
FIN SI

ventasPorCiudad(ventas, ciudad)

NORMALIZAR la ciudad buscada con trim y toLowerCase
INICIAR total en 0
PARA CADA venta EN ventas
    NORMALIZAR venta.ciudad con trim y toLowerCase
    SI la ciudad normalizada coincide con la buscada
        total = total + valorVenta(venta)
    FIN SI
FIN PARA
DEVOLVER total

Resultado esperado/observado

Total vendido

$985.000

Unidades vendidas

21

Venta de mayor valor

Registro id: 10, 4 unidades de Origen Huila 500 g, $168.000

Ticket promedio

$89.545,45 aproximadamente (11 ventas válidas)

Ventas de Medellín, incluyendo medellín

$356.000

El ticket promedio utiliza 11 ventas válidas porque el registro id: 8 tiene cantidad cero. El total vendido permanece en $985.000 porque esa fila aporta $0.

Traza manual 1
Registro Cálculo Valor de la venta Total acumulado
1     2*42000     84000    84000
2     1*26000     26000    110000
3     1*95000     95000    205000
4     1*42000     42000    247000
5     3*45000     135000   382000

Al terminar los 12 registros, el total es $985.000.

Traza manual 2
Registro Valorcalculador      Mayor anterior           Decisión                              Mayor actual
1        84000                null                     Se inicializa con la primera venta.   84000
2        26000                84000                    No supera el mayor.                   84000
3        95000                84000                    Se reemplaza el mayor.                95000
7        120000               135000                   (registro 5)No lo supera.             135000
10       168000               90000                    (registro 9)Se reemplaza el mayor.    168000
12       78000                168000                    No lo supera.                        168000
Resultado: el registro id: 10 es la venta de mayor valor, con $168.000.

Comportamiento definido para arreglos vacíos
Función                          Resultado esperado con []        Justificación
totalVendido([])                 0                                No hay valores que sumar.
unidadesVendidas([])             0                                No hay unidades que contar.
ventaMayor([])                   null                             No existe un registro máximo.
ticketPromedio([])               0                                No hay ventas válidas; se evita dividir entre cero.
ventasPorCiudad([], "Medellín")  0                                No hay ventas que coincidan.
valorVenta                       No aplica sin un objeto de venta La función necesita recibir un registro válido.
Pruebas ejecutadas y resultados

Se ejecutó node analitica.js con los datos completos. La consola mostró:

totalVendido: 985000.

unidadesVendidas: 21.

ventaMayor: registro id: 10.

ticketPromedio: 89545.45454545454.

ventasPorCiudad(ventas, "MEDELLÍN"): 356000.

MiniReto 3
totalVendidoM(ventas), implementada con reduce().

unidadesVendidasM(ventas), implementada con reduce().

ventasPorCiudadM(ventas), que agrupa el valor vendido por ciudad normalizada en un objeto.

unidadesPorProducto(ventas), que acumula unidades por producto.

topProductosPorValor(ventas, k), que acumula el valor por producto, convierte el objeto con Object.entries(), ordena de mayor a menor y devuelve los primeros k resultados con slice().

Registro de depuración 1 — Reporte falla en ventas por ciudad

Síntoma: node reporte.js produce TypeError: Cannot read properties of undefined (reading 'trim').

Entrada que lo produce: la llamada ventasPorCiudad(ventas) en reporte.js.

Hipótesis: la función ventasPorCiudad espera dos argumentos (ventas y ciudad), pero el reporte le entrega solamente uno.

Prueba realizada: ejecutar node reporte.js con los archivos recibidos.

Causa confirmada: dentro de ventasPorCiudad, la variable ciudad queda como undefined y se intenta ejecutar ciudad.trim().

Corrección propuesta: si el reporte necesita todas las ciudades, debe llamar a una función de agrupación como ventasPorCiudadM(ventas) o totalPorCiudad(ventas), después de unificar el nombre y exportar correctamente esa función. Si necesita una ciudad específica, debe pasar el segundo argumento.


Mini Reto 5
si n se multiplica por 10, ¿cuánto se multiplica el número de operaciones de cada función?
R/= Se aumenta 10 veces las operaciones, a excepción de mayorventa y totalporciudad que tiene operaciones adicionales por el tema de las comparaciones. 

La complejidad O(n) representa un crecimiento proporcional al número de elementos que recibe una función. A medida que aumenta la cantidad de datos que debe recorrer, aumenta también el número de operaciones.

Por otro lado, O(1) representa una complejidad constante: la cantidad de operaciones no depende del tamaño del arreglo. En el caso de `primeraVenta`, se accede directamente al primer elemento mediante `ventas[0]`, sin recorrer los demás registros.

Comparación de predicciones y resultados

Se esperaba que, al multiplicar por 10 la cantidad de ventas, las operaciones de las funciones con complejidad O(n) también aumentaran aproximadamente 10 veces. Para la función O(1), se esperaba que el número de operaciones permaneciera constante.

Las mediciones confirmaron la predicción:

totalVendidoInstrumentado: pasó de 100 a 1.000 operaciones al pasar de 100 a 1.000 ventas.

ventaMayorInstrumentado: pasó de 299 a 2.999 operaciones.

totalPorCiudadInstrumentado: pasó de 200 a 2.000 operaciones.

primeraVentaInstrumentada: permaneció en 2 operaciones.

Las tres primeras funciones presentan complejidad temporal O(n), porque su trabajo crece proporcionalmente al tamaño del arreglo. primeraVentaInstrumentada presenta complejidad O(1), porque su número de operaciones permanece constante.

Minireto 6 
Traza manual 
const ventasPrueba = [
    { cliente: "C01" },
    { cliente: "C02" },
    { cliente: "C01" },
    { cliente: "C03" },
    { cliente: "C02" }
];
1. i = 0  j= 1 = "C01" vs "C02" recurrentes []
2. i = 0  j=2 = "C01" vs "C01" recuerrentes ["C01",]
3. i = 0  j=3 = "C01" vs "C03" recuerrentes ["C01",]
4. i = 0  j=4 = "C01" vs "C02" recuerrentes ["C01",]
5. i = 1  j=2 = "C02" vs "C01" recuerrentes ["C01",]
6. i = 1  j=3 = "C02" vs "C03" recuerrentes ["C01",]
7. i = 1  j=4 = "C02" vs "C02" recuerrentes ["C01", "C02",]
8. i = 2  j=3 = "C01" vs "C03" recuerrentes ["C01", "C02",]
9. i = 2  j=4 = "C01" vs "C02" recuerrentes ["C01", "C02",]
10. i = 3 j=4 = "C03" vs "C02" recurrentes  ["C01", "C02"]

El algoritmo realizó las siguientes comparaciones:

Primera iteración (i = 0): 4 comparaciones.

Segunda iteración (i = 1): 3 comparaciones.

Tercera iteración (i = 2): 2 comparaciones.

Cuarta iteración (i = 3): 1 comparación.

Quinta iteración (i = 4): 0 comparaciones.

Total: 10 comparaciones.

El resultado obtenido fue ["C01", "C02"], ya que ambos clientes aparecen más de una vez.

Se observa que el número de comparaciones disminuye en cada iteración del ciclo externo. Para cinco ventas se realizan 4 + 3 + 2 + 1 = 10 comparaciones.


tabla de medición de tiempo 
prueba-1000: 14.126ms
prueba-2000: 34.388ms
prueba-4000: 168.035ms
prueba-8000: 541.483ms
prueba-16000: 2.679s

Los resultados muestran que el tiempo de ejecución aumenta a medida que se duplica la cantidad de ventas. Aunque el incremento no es exactamente igual en todas las pruebas, se observa una tendencia cercana al crecimiento cuadrático O(n²).

Esto se debe a que la función utiliza dos ciclos anidados para comparar los clientes de las ventas. Por tanto, cuando aumenta el volumen de datos, también aumenta considerablemente la cantidad de comparaciones que debe realizar el algoritmo.

Ventas	Tiempo estimado
100.000	104.65 segundos (1.74 min)
1.000.000	10.464.84 segundos (2.91 horas)

La función includes() realiza una búsqueda secuencial dentro del arreglo recurrentes. Esto significa que, además de las comparaciones realizadas por los ciclos anidados, se pueden efectuar búsquedas adicionales para comprobar si un cliente ya fue registrado.

En el peor caso, estas búsquedas recorren una parte importante del arreglo, aumentando el trabajo que debe realizar la función y empeorando su rendimiento.
El reporte funciona correctamente cuando se procesa una cantidad pequeña de ventas. Sin embargo, a medida que aumenta el volumen de información, el tiempo necesario para identificar a los clientes recurrentes también crece considerablemente.

Esto ocurre porque el sistema debe comparar los clientes de diferentes ventas y verificar repetidamente si ya fueron identificados. Por esta razón, procesar una cantidad mucho mayor de registros puede provocar demoras importantes en la generación de los reportes.

En consecuencia, si el negocio continúa aumentando sus ventas, será necesario optimizar este proceso para evitar que los tiempos de espera afecten la consulta y el análisis de la información.
