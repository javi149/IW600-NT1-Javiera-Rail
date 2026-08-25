<template>
  <div class="tarjeta">
    <h3>{{ nombre }}</h3>
    <p><strong>Categoría:</strong> {{ categoria }}</p>
    <p><strong>Productor:</strong> {{ productor }}</p>
    <p><strong>Comuna:</strong> {{ comuna }}</p>
    <p class="precio">Valor: ${{ precio }}</p>
    
    <!-- El botón emite el evento 'me-interesa' y envía la variable 'nombre' -->
    <button class="btn-interes" @click="$emit('me-interesa', nombre)">
      Me interesa
    </button>
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
    precio: Number
  }
}
</script>

<style scoped>
.tarjeta {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  background-color: #f4f4f4;
  width: 250px;
}
.precio {
  font-weight: bold;
  color: #2e7d32;
}
.btn-interes {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
}
.btn-interes:hover {
  background-color: #1b5e20;
}
</style>