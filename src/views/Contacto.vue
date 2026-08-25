<template>
  <div class="contacto-container">
    <h2>Contacto Mercado Ñuble</h2>
    <p>Comunícate con la organización para más información.</p>

    <form v-if="!formularioEnviado" @submit.prevent="procesarFormulario" class="formulario">
      <div class="campo">
        <label>Nombre:</label>
        <input type="text" v-model="formulario.nombre" placeholder="Tu nombre completo">
      </div>
      
      <div class="campo">
        <label>Correo electrónico:</label>
        <input type="email" v-model="formulario.correo" placeholder="tu@correo.com">
      </div>
      
      <div class="campo">
        <label>Teléfono:</label>
        <input type="text" v-model="formulario.telefono" placeholder="Ej: +56912345678">
      </div>
      
      <div class="campo">
        <label>Comuna:</label>
        <select v-model="formulario.comuna">
          <option value="" disabled>Seleccione una comuna</option>
          <option value="Chillán">Chillán</option>
          <option value="Pinto">Pinto</option>
          <option value="San Carlos">San Carlos</option>
          <option value="Otra">Otra comuna</option>
        </select>
      </div>
      
      <div class="campo">
        <label>Mensaje:</label>
        <textarea v-model="formulario.mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
      </div>

      <div v-if="error" class="alerta error">
        {{ error }}
      </div>

      <button type="submit" class="btn-enviar">Enviar Mensaje</button>
    </form>

    <div v-else class="resumen-exito">
      <h3>¡Mensaje enviado con éxito!</h3>
      <p>Gracias por contactarnos. Hemos recibido los siguientes datos:</p>
      <ul class="lista-resumen">
        <li><strong>Nombre:</strong> {{ formulario.nombre }}</li>
        <li><strong>Correo:</strong> {{ formulario.correo }}</li>
        <li><strong>Teléfono:</strong> {{ formulario.telefono }}</li>
        <li><strong>Comuna:</strong> {{ formulario.comuna }}</li>
        <li><strong>Mensaje:</strong> {{ formulario.mensaje }}</li>
      </ul>
      <button @click="resetearFormulario" class="btn-volver">Enviar otro mensaje</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  data() {
    return {
      formulario: {
        nombre: '',
        correo: '',
        telefono: '',
        comuna: '',
        mensaje: ''
      },
      error: '',
      formularioEnviado: false 
    }
  },
  methods: {
    procesarFormulario() {
      // 1. Validación: Verificamos que todos los campos tengan información
      if (!this.formulario.nombre || !this.formulario.correo || !this.formulario.telefono || !this.formulario.comuna || !this.formulario.mensaje) {
        this.error = 'Por favor, completa todos los campos obligatorios antes de enviar.';
        return; // El return detiene la ejecución de la función aquí mismo
      }
      
      // 2. Si pasa la validación, limpiamos el error y cambiamos la vista al resumen
      this.error = '';
      this.formularioEnviado = true;
    },
    resetearFormulario() {
      // Función extra para limpiar los datos y permitir enviar otro mensaje
      this.formulario = { nombre: '', correo: '', telefono: '', comuna: '', mensaje: '' };
      this.formularioEnviado = false;
    }
  }
}
</script>

<style scoped>
.contacto-container {
  max-width: 600px;
  margin: 0 auto;
}
.formulario {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.campo {
  display: flex;
  flex-direction: column;
}
.campo label {
  font-weight: bold;
  margin-bottom: 5px;
}
.campo input, .campo select, .campo textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
.btn-enviar, .btn-volver {
  background-color: #7b1fa2;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.alerta.error {
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
}
.resumen-exito {
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #c8e6c9;
}
.lista-resumen {
  margin: 15px 0;
  line-height: 1.6;
}
</style>