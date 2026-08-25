import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './views/Inicio.vue'
import Productos from './views/Productos.vue'
import Productores from './views/Productores.vue'
import Contacto from './views/Contacto.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/productos', component: Productos },
  { path: '/productores', component: Productores },
  { path: '/contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router