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
    }
  }
}
</script>

<style scoped>
.filtro-container {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 5px;
}
.filtro-container input {
  padding: 5px;
  font-size: 1rem;
  width: 200px;
}
.mensaje-vacio {
  padding: 20px;
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #ef9a9a;
  border-radius: 8px;
  text-align: center;
}
.grilla-productos {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.notificacion-interes {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #c8e6c9;
  border-radius: 5px;
  text-align: center;
}
</style>