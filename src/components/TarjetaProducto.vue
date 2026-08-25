<template>
  <div class="tarjeta">
    <h3>{{ nombre }}</h3>
    <p><strong>Categoría:</strong> {{ categoria }}</p>
    <p><strong>Productor:</strong> {{ productor }}</p>
    <p><strong>Comuna:</strong> {{ comuna }}</p>
    <p class="precio">Valor: ${{ precio }}</p>
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
</style>