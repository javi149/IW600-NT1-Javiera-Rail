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

- **Qué ocurre después y Mejora UX:** Al recibir el evento, el padre ejecuta el método `manejarInteres()`, actualizando el estado para mostrar dinámicamente una notificación verde esmeralda. Como mejora de Experiencia de Usuario (UX), se implementó lógica asíncrona utilizando `setTimeout` para que la notificación se oculte automáticamente a los 5 segundos. Además, se utilizó `clearTimeout` para reiniciar el contador y evitar bugs visuales si el usuario hace múltiples clics rápidos.


## Parte E - Formulario y validación
Se implementó un formulario de contacto utilizando la directiva `v-model` para enlazar bidireccionalmente los campos de nombre, correo electrónico, teléfono, comuna y mensaje. 
- **Validación:** El método `procesarFormulario` evalúa que ninguno de los campos esté vacío antes de procesar el envío. 

- **Respuestas de la aplicación:** Si faltan datos, el sistema renderiza dinámicamente un mensaje de error advirtiendo al usuario. Si los datos son correctos, el formulario desaparece y se muestra una vista de confirmación con el resumen de la información ingresada, cumpliendo con el requerimiento sin uso de base de datos.


## Parte F - Diseño y presentación
Se implementó un diseño de interfaz minimalista y altamente estructurado, caracterizado por el uso de una paleta estricta de dos colores (azul marino profundo y fondo blanco). Se utilizaron bordes sólidos de 2px, esquinas sin redondear y tipografía sans-serif audaz. Esta arquitectura visual proporciona máxima legibilidad, coherencia absoluta entre las vistas y una estética moderna, cumpliendo con los requerimientos visuales solicitados.


## Mejoras Adicionales (UI/UX y Arquitectura)
Más allá de los requerimientos base, se implementaron las siguientes soluciones de ingeniería web:

*   **Enlace Dinámico de Assets (Data Binding):** Se utilizó la directiva `v-bind` (`:src`) en el componente hijo `TarjetaProducto.vue` para renderizar imágenes dinámicamente basadas en el estado del componente padre, asegurando un flujo de datos unidireccional limpio.
*   **Estabilidad y Prevención de "Link Rot":** Para evitar los riesgos de depender del *hotlinking* (enlaces a servidores externos que pueden caerse o cambiar), se integró una API de placeholders dinámicos (`placehold.co`). Esto garantiza que el prototipo siempre renderice imágenes estables que respetan la paleta de colores de la interfaz.
*   **Arquitectura CSS y Flexbox:** Se solucionaron problemas de desbordamiento en monitores grandes implementando un contenedor central con `max-width` y márgenes automáticos (`margin: 0 auto`). Además, se utilizó `justify-content: center` para equilibrar la carga visual de la grilla de productos.
*   **Dashboard de Inicio:** Se reemplazó la vista estática tradicional por un panel de métricas (Dashboard) y una sección "Hero", aportando mayor valor de negocio al prototipo y demostrando dominio en la construcción de layouts complejos.


## Tecnologías utilizadas
Vue 3, Vite, Vue Router, CSS3, JavaScript.


## Ejecución
1. Clonar el repositorio.
2. Ejecutar `npm install` para descargar las dependencias.
3. Ejecutar `npm run dev` para levantar el servidor local.


## Reflexión final
El mayor desafío técnico fue lograr la correcta comunicación inversa entre los componentes utilizando `$emit` en la Parte D, y gestionar correctamente el estado reactivo del catálogo al aplicar los filtros. Se resolvió analizando el flujo de datos unidireccional de Vue y definiendo claramente las responsabilidades entre el componente Padre y el componente Hijo.