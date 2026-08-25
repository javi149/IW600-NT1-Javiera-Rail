<template>
  <div>
    <h2>Catálogo de Mercado Ñuble</h2>
    
    <!-- Buscador por texto -->
    <div class="filtro-container">
      <label for="buscador">Buscar por comuna: </label>
      <input 
        type="text" 
        id="buscador" 
        v-model="comunaSeleccionada" 
        placeholder="Ej: Chillán, Pinto..." 
      />
    </div>

    <!-- Renderizado Condicional -->
    <div v-if="productosFiltrados.length === 0" class="mensaje-vacio">
      <p>Lo sentimos, actualmente no hay productos disponibles en esta comuna.</p>
    </div>

    <div v-else class="grilla-productos">
      <TarjetaProducto 
        v-for="item in productosFiltrados" 
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
      comunaSeleccionada: '', // Ahora guarda el texto que el usuario escribe
      productos: [
        { id: 1, nombre: 'Miel de Abeja', categoria: 'Miel', productor: 'Apícola Los Andes', comuna: 'Pinto', precio: 6500 },
        { id: 2, nombre: 'Longanizas', categoria: 'Embutidos', productor: 'Cecinas Ñuble', comuna: 'Chillán', precio: 8000 },
        { id: 3, nombre: 'Queso Mantecoso', categoria: 'Lácteos', productor: 'Lácteos Santa Clara', comuna: 'San Carlos', precio: 7500 },
        { id: 4, nombre: 'Mermelada de Mora', categoria: 'Conservas', productor: 'Sabores del Campo', comuna: 'Pinto', precio: 4000 },
        { id: 5, nombre: 'Arándanos Frescos', categoria: 'Frutas', productor: 'Huerto San Juan', comuna: 'San Carlos', precio: 3000 },
        { id: 6, nombre: 'Artesanía en Mimbre', categoria: 'Artesanía', productor: 'Manos Locales', comuna: 'Chillán', precio: 12000 }
      ]
    }
  },
  computed: {
    productosFiltrados() {
      // Si el buscador está vacío, retorna todo
      if (this.comunaSeleccionada.trim() === '') {
        return this.productos;
      }
      
      // Normalizamos el texto de búsqueda a minúsculas
      const busqueda = this.comunaSeleccionada.toLowerCase();
      
      // Filtramos usando includes para búsquedas parciales (ej: "san" encuentra "San Carlos")
      return this.productos.filter(producto => 
        producto.comuna.toLowerCase().includes(busqueda)
      );
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
.filtro-container {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 5px;
}
.filtro-container select {
  padding: 5px;
  font-size: 1rem;
}
.mensaje-vacio {
  padding: 20px;
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #ef9a9a;
  border-radius: 8px;
  text-align: center;
}
</style>