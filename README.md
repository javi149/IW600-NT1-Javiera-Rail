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