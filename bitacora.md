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
