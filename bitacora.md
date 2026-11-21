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

Nota: veo que aparece también en la tabla, una columna de los index, claramente está indicando la posición
que el objeto ocupa en el array. 

Registro 2 Casos borde detectados
En la revisión de los datos, vi dos errores:
1. Los nombres de las ciudades tienen inconsistencias en la escritura, hay tildes o falta de tildes, luego hay mayúsculas 
y minúsculas.
2. En la venta 8, se registra como venta pero la cantidad es 0 
Nota: En la parte de clientes no vi ningún error en los datos 

Registro 3 Plan de los indicadores
 cuánto se vendió en total, 
    -Llamar venta.cantidad y venta.precio
    -Por cada venta calcular cantidad * precio
    -Tener una variable que vaya acumulando ese calculo
    -Con un console.log mostrar esa variable que tienen el total de lo que se vendió
    CASOS BORDES: El caso borde que veo es saber establecer muy bien en que momento va
                  a detenerse el ciclo. 
    Definir total como Entero              
   PARA CADA venta EN ventas
    valorVenta = venta.cantidad * venta.precio
    total = total + valorVenta
    FIN PARA 
    Escribir "Se vendió en total: " + total 

    - Recorrido: todas las ventas.
    - Condición: ninguna especificada.
    - Acumulador: dinero total.
    - Inicialización: cero.
 cuántas unidades salieron,
    -Recorrer el arreglo 
    -Llamar la clave "cantidad" por cada venta
    -Acumular esas cantidades en una variable 
    -Mostrar la variable 
    
    Definir total como Entero 
    PARA CADA venta EN ventas 
    cantidadVenta = venta.cantidad
    total = total + cantidadVenta

 cuál fue la venta más grande y 
    -Recorrer todas las ventas.
    -Comparar el valor de cada venta con el mayor encontrado.
    - Usar la variable para almacenar registro mayor.

    ventaMayor = 0
    valorVenta = venta.cantidad * venta.precio
    PARA CADA venta EN Ventas
     
    SI
 cuánto gasta en promedio un cliente por compra (el ticket promedio). 

  