# Mercado Ñuble Digital

## Estudiante
Javiera Rail Astudillo

## Descripción
Prototipo frontend de una SPA para agrupar y visualizar productos de pequeños emprendedores de la Región de Ñuble.

## Parte A - Estructura y navegación
Se organizó el proyecto separando las responsabilidades en carpetas (`views` y `components`). Se implementó `vue-router` definiendo cuatro rutas principales (Inicio, Productos, Productores y Contacto) y se integró un menú de navegación en `App.vue` utilizando `<router-link>` para transiciones sin recarga de página.

## Parte B - Componentes y Props
se creó el componente TarjetaProducto.vue. Este es el que recibe los datos (nombre, categoría, productor, comuna y precio) mediante props. La informacion se envía desde el compoente padre que es Productos.vue que es el que almacena un arreglo con 6 productos correspondientes a 3 comunas de Ñuble que son Pinto, Chillán y San Carlos.

## Parte C - Listas y condicionales
se implementó unb filtro mediante una etiqueta <select> vinculada a v-model, se utilizó una propiedad computada (computed), se genera dinamicamente la lista productoFiltrados, la directiva v-for recorre esta lista computada. Se incorporó v-if para evaluar si el largo del arreglo filtrado es cero, en cuyo caso se muestra un mensaje de "no hay procutos disponibles" (si se selecciona Bulnes) y un v-el para renderizar el catalogo cuando existen coincidencias.

## Parte D - Comunicacion mediante Emit
- **Acción del usuario:** El usuario hace clic en el botón "Me interesa" ubicado en la tarjeta de cada producto.
- **Componente que genera el evento:** El componente hijo (`TarjetaProducto.vue`) captura el clic y emite un evento personalizado hacia arriba usando `$emit('me-interesa', nombre)`.
- **Componente que lo recibe:** El componente padre (`Productos.vue`) escucha este evento en la directiva `@me-interesa="manejarInteres"`.
- **Qué ocurre después:** Al recibir el evento, el padre ejecuta el método `manejarInteres()`, el cual guarda el nombre del producto seleccionado en una variable reactiva. Esto desencadena un cambio visible en la interfaz mediante un `v-if`, mostrando una notificación verde en la parte superior del catálogo con el producto elegido.

## Parte E - Formulario y validación
Se implementó un formulario de contacto utilizando la directiva `v-model` para enlazar bidireccionalmente los campos de nombre, correo electrónico, teléfono, comuna y mensaje. 
- **Validación:** El método `procesarFormulario` evalúa que ninguno de los campos esté vacío antes de procesar el envío. 
- **Respuestas de la aplicación:** Si faltan datos, el sistema renderiza dinámicamente un mensaje de error advirtiendo al usuario. Si los datos son correctos, el formulario desaparece y se muestra una vista de confirmación con el resumen de la información ingresada, cumpliendo con el requerimiento sin uso de base de datos.