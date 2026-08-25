<template>
  <div>
    <h2>Catálogo de Mercado Ñuble</h2>
    <div class="grilla-productos">
      <!-- Iteramos el arreglo y enviamos los datos mediante props -->
      <TarjetaProducto 
        v-for="item in productos" 
        :key="item.id"
        :nombre="item.nombre"
        :categoria="item.categoria"
        :productor="item.productor"
        :comuna="item.comuna"
        :precio="item.precio"
      />
    </div>
  </div>
</template>

<script>
import TarjetaProducto from '../components/TarjetaProducto.vue'

export default {
  name: 'Productos',
  components: {
    TarjetaProducto
  },
  data() {
    return {
      productos: [
        { id: 1, nombre: 'Miel de Abeja', categoria: 'Miel', productor: 'Apícola Los Andes', comuna: 'Pinto', precio: 6500 },
        { id: 2, nombre: 'Longanizas', categoria: 'Embutidos', productor: 'Cecinas Ñuble', comuna: 'Chillán', precio: 8000 },
        { id: 3, nombre: 'Queso Mantecoso', categoria: 'Lácteos', productor: 'Lácteos Santa Clara', comuna: 'San Carlos', precio: 7500 },
        { id: 4, nombre: 'Mermelada de Mora', categoria: 'Conservas', productor: 'Sabores del Campo', comuna: 'Pinto', precio: 4000 },
        { id: 5, nombre: 'Arándanos Frescos', categoria: 'Frutas', productor: 'Huerto San Juan', comuna: 'San Carlos', precio: 3000 },
        { id: 6, nombre: 'Artesanía en Mimbre', categoria: 'Artesanía', productor: 'Manos Locales', comuna: 'Chillán', precio: 12000 }
      ]
    }
  }
}
</script>

<style scoped>
.grilla-productos {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>