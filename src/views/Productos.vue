<template>
  <div>
    <h2>Catálogo de Mercado Ñuble</h2>
    
    <div class="filtro-container">
      <label for="buscador">Buscar por comuna: </label>
      <input 
        type="text" 
        id="buscador" 
        v-model="comunaSeleccionada" 
        placeholder="Ej: Chillán, Pinto..." 
      />
    </div>

    <div v-if="productoSeleccionado" class="notificacion-interes">
      Has manifestado interés en: <strong>{{ productoSeleccionado }}</strong>
    </div>

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
        :imagen="item.imagen" 
        @me-interesa="manejarInteres" 
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
      comunaSeleccionada: '', 
      productoSeleccionado: '', 
      temporizador: null,
      productos: [
        { id: 1, nombre: 'Miel de Abeja', categoria: 'Miel', productor: 'Apícola Los Andes', comuna: 'Pinto', precio: 6500, imagen: 'https://images.unsplash.com/photo-1654515722385-c684c5331c04?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, nombre: 'Longanizas', categoria: 'Embutidos', productor: 'Cecinas Ñuble', comuna: 'Chillán', precio: 8000, imagen: 'https://images.unsplash.com/photo-1591989330748-777649e84466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, nombre: 'Queso Mantecoso', categoria: 'Lácteos', productor: 'Lácteos Santa Clara', comuna: 'San Carlos', precio: 7500, imagen: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80' },
        { id: 4, nombre: 'Mermelada de Mora', categoria: 'Conservas', productor: 'Sabores del Campo', comuna: 'Pinto', precio: 4000, imagen: 'https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/9da270ea1199250ff7bf9d1919d3d5d5.webp?itok=lWv3jm8m' },
        { id: 5, nombre: 'Arándanos Frescos', categoria: 'Frutas', productor: 'Huerto San Juan', comuna: 'San Carlos', precio: 3000, imagen: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=400&q=80' },
        { id: 6, nombre: 'Artesanía en Mimbre', categoria: 'Artesanía', productor: 'Manos Locales', comuna: 'Chillán', precio: 12000, imagen: 'https://images.unsplash.com/photo-1760182200277-fae00dfb149f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    }
  },
  computed: {
    productosFiltrados() {
      if (this.comunaSeleccionada.trim() === '') {
        return this.productos;
      }
      const busqueda = this.comunaSeleccionada.toLowerCase();
      return this.productos.filter(producto => 
        producto.comuna.toLowerCase().includes(busqueda)
      );
    }
  },
  methods: {
    manejarInteres(nombreDelProducto) {
      this.productoSeleccionado = nombreDelProducto;
      
      if (this.temporizador) {
        clearTimeout(this.temporizador);
      }
      
      this.temporizador = setTimeout(() => {
        this.productoSeleccionado = '';
      }, 5000);
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}

.filtro-container {
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 15px; 
  margin-bottom: 40px;
  border: none !important; 
  box-shadow: none !important;
  background-color: transparent !important;
  padding: 0;
}

.grilla-productos {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}
</style>