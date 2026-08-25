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