<template>
  <div class="tarjeta-contenedor">
    <img :src="imagen" :alt="nombre" class="img-producto" />
    
    <div class="contenido-texto">
      <h3>{{ nombre }}</h3>
      <p><strong>Categoría:</strong> {{ categoria }}</p>
      <p><strong>Productor:</strong> {{ productor }}</p>
      <p><strong>Comuna:</strong> {{ comuna }}</p>
      <p class="precio">Valor: ${{ precio }}</p>
      
      <button class="btn-interes" @click="$emit('me-interesa', nombre)">
        Me interesa
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarjetaProducto',
  props: {
    nombre: String,
    categoria: String,
    productor: String,
    comuna: String,
    precio: Number,
    imagen: String 
  }
}
</script>

<style scoped>
.tarjeta-contenedor {
  width: 280px; 
  display: flex;
  flex-direction: column;
}

.img-producto {
  width: 100%;
  height: 200px;
  object-fit: cover; 
  border-bottom: 3px solid #1a365d; 
  display: block;
}

.contenido-texto {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.precio {
  font-weight: bold;
  color: #1a365d; 
  font-size: 1.1rem; 
  margin-top: 10px;
  margin-bottom: 15px; 
}

.btn-interes {
  margin-top: auto; 
}
</style>