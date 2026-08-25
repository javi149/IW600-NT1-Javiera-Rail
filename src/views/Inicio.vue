<template>
  <div class="inicio-container">
    
    <section class="hero">
      <div class="hero-tag"># INNOVACIÓN REGIONAL</div>
      <h1 class="hero-titulo">Conecta local.<br>Compra inteligente.</h1>
      <p class="hero-texto">
        Descubre los mejores productos artesanales y agrícolas de nuestra región. 
        Apoyamos el comercio justo y la visibilidad digital de los emprendedores.
      </p>
      <router-link to="/productos" class="btn-hero">Explorar Catálogo →</router-link>
    </section>

    <section class="dashboard">
      <div class="stat-box">
        <span class="stat-numero">6</span>
        <span class="stat-label">Productos Únicos</span>
      </div>
      <div class="stat-box">
        <span class="stat-numero">3</span>
        <span class="stat-label">Comunas Activas</span>
      </div>
      <div class="stat-box">
        <span class="stat-numero">100%</span>
        <span class="stat-label">Calidad Local</span>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style scoped>
.inicio-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
}

.hero {
  border: 3px solid #1a365d;
  padding: 50px 30px;
  background-color: #ffffff;
  box-shadow: 8px 8px 0px #1a365d; 
}

.hero-tag {
  display: inline-block;
  border: 2px solid #1a365d;
  padding: 5px 10px;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.hero-titulo {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 20px;
  color: #1a365d;
}

.hero-texto {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 30px;
  line-height: 1.5;
}

.btn-hero {
  display: inline-block;
  background-color: #1a365d; 
  color: #ffffff;
  border: 3px solid #1a365d;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease;
  box-shadow: 4px 4px 0px #1a365d;
}

.btn-hero:hover {
  background-color: #1a365d;
  transform: translate(-2px, -2px); 
  box-shadow: 6px 6px 0px #1a365d;
}


.dashboard {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-box {
  flex: 1;
  min-width: 200px;
  border: 3px solid #1a365d;
  padding: 30px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 6px 6px 0px #1a365d;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-numero {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #1a365d;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>