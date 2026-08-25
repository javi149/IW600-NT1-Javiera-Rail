<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Inicio</router-link> |
        <router-link to="/productos">Productos</router-link> |
        <router-link to="/productores">Productores</router-link> |
        <router-link to="/contacto">Contacto</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view> 
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Space Grotesk', sans-serif;
}

body {
  background-color: #ffffff; 
  color: #1a365d;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px; 
  padding-bottom: 50px;
}

header {
  border-bottom: 2px solid #1a365d;
  padding: 20px;
  margin-bottom: 30px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  color: #1a365d;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

nav a:hover, nav a.router-link-active {
  text-decoration: underline;
  text-underline-offset: 6px;
}

.tarjeta-contenedor, .formulario, .mensaje-vacio, .resumen-exito {
  background-color: #ffffff !important;
  border: 3px solid #1a365d !important; 
  border-radius: 0 !important; 
  box-shadow: 6px 6px 0px #1a365d !important;
  color: #1a365d !important;
}

h2 {
  font-weight: 800;
  font-size: 2.8rem;
  letter-spacing: -1.5px;
  margin-bottom: 25px;
  color: #1a365d;
  line-height: 1.1;
}

h3 {
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -0.5px;
  margin-bottom: 10px;
  color: #1a365d;
}

button, .btn-interes, .btn-enviar, .btn-volver {
  background-color: #1a365d !important;
  color: #ffffff !important;
  border: 3px solid #1a365d !important; 
  border-radius: 0 !important; 
  text-transform: uppercase;
  font-weight: 800; 
  letter-spacing: 1px; 
  padding: 12px 24px !important;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover, .btn-interes:hover, .btn-enviar:hover, .btn-volver:hover {
  background-color: #ffffff !important;
  color: #1a365d !important;
}

input, select, textarea {
  border: 3px solid #1a365d !important;
  border-radius: 0 !important;
  background-color: #ffffff;
  color: #1a365d;
  padding: 12px !important;
  font-weight: bold;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  background-color: #f0f4f8; 
}

.mensaje-vacio, .alerta.error {
  border-color: #d32f2f !important;
  color: #d32f2f !important;
  box-shadow: 6px 6px 0px #d32f2f !important;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}

.notificacion-interes {
  background-color: #CFE1B9 !important; 
  color: #1a365d !important; 
  border: 3px solid #1a365d !important;
  box-shadow: 6px 6px 0px #1a365d !important;
  border-radius: 0 !important;
  padding: 15px;
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>