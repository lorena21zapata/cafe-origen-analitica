Café Origen — Motor de análisis de ventas

Versión: v0.1

Descripción

Café Origen es un proyecto desarrollado en JavaScript con Node.js que permite analizar los registros de ventas de una cafetería y generar un reporte de negocio directamente en la consola.

El sistema procesa un conjunto de datos almacenado en un arreglo de objetos y utiliza funciones de análisis para calcular indicadores comerciales, agrupar información y presentar resultados de manera organizada.

Funcionalidades

El motor permite:

Calcular el valor individual de cada venta.

Obtener el total vendido.

Calcular las unidades vendidas.

Identificar la venta de mayor valor.

Calcular el ticket promedio considerando únicamente las ventas válidas.

Consultar las ventas de una ciudad específica.

Agrupar las ventas por ciudad.

Calcular las unidades vendidas por producto.

Identificar los tres productos con mayor valor de ventas.

Consultar el resumen de ventas de una fecha específica.

Controlar consultas sin ventas para evitar resultados NaN.

Tecnologías utilizadas

JavaScript.

Node.js.

Git y GitHub.

Estructura del proyecto

cafe-origen-analitica/
│
├── src/
│   ├── datos.js
│   ├── analitica.js
│   ├── explorar.js
│   ├── reporte.js
│   └── verificar.js
│
├── bitacora.md
└── README.md

¿Cómo ejecutar el proyecto?

Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

Ingresar a la carpeta:

cd cafe-origen-analitica

Ejecutar el reporte:

node src/reporte.js

Ejecutar las verificaciones:

node src/verificar.js

No se requieren dependencias externas para ejecutar esta versión.

¿Qué preguntas responde el sistema?

¿Cuánto dinero se vendió en total?

¿Cuántas unidades se vendieron?

¿Cuál fue la venta de mayor valor?

¿Cuál es el ticket promedio?

¿Qué ciudad generó más ventas?

¿Cuántas unidades se vendieron por producto?

¿Cuáles son los tres productos con mayor valor de ventas?

¿Cuánto se vendió en una fecha determinada?

¿Qué sucede cuando se consulta un día sin ventas?

Tratamiento de datos

El sistema normaliza los nombres de las ciudades para evitar agrupaciones duplicadas por diferencias de mayúsculas o espacios exteriores.

También controla las fechas sin ventas, evitando realizar divisiones entre cero al calcular el ticket promedio.

Versión 0.1

Esta versión integra las funciones de análisis con un reporte de negocio por consola y pruebas de verificación para los problemas de agrupación de ciudades y cálculo del ticket promedio.

Proyecto desarrollado con fines de aprendizaje de algoritmia y JavaScript.