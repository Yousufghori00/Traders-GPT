<script>
import Sidebar from './components/sidebar/Sidebar.vue'
import Navbar from '@/components/sidebar/Navbar.vue' 
import { sidebarWidth } from '@/components/sidebar/state.js'
export default {
  components: { Sidebar,Navbar },
  setup() {
    return { sidebarWidth }
  }
}
</script>
<template>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<div :style="{ 'margin-left': sidebarWidth ,}">
  <Navbar />
</div>
<div class="d-flex">
  <Sidebar />
</div>
  <div :style="{ 'margin-left': sidebarWidth ,}">
    <router-view />
  </div>
</template>



<style scoped>
@import url('../src/assets/main.css');
</style>
<style>
#app {
  font-family: "Poppins", sans-serif !important;
}

 body {
   min-height: 100vh;
   color: var(--color-text);
   background: #081327;
   transition:color 0.5s,
   background-color 0.5s;
   line-height: 1.6;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   margin: 0px;
 }
</style>
