<script>
// import Sidebar from './components/sidebar/Sidebar.vue'
import Sidebar from './components/sidebar/SideBar2.vue'
import Navbar from '@/components/sidebar/Navbar'

import { sidebarWidth } from '@/components/sidebar/state'
export default {
  components: { Sidebar,Navbar },
  setup() {
    return { sidebarWidth }
  }
}
</script>
<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<div :style="{ 'margin-left': sidebarWidth ,}">
  <Navbar />
</div>
<div class="d-flex">
  <Sidebar />
</div>
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>



<style scoped>
@import url('../src/globle.scss');
</style>
<style>
#app {
   font-family: "Montserrat"!important;
}

 body {
   min-height: 100vh;
   color: var(--color-text);
   background: #182040;
   transition:color 0.5s,
   background-color 0.5s;
   line-height: 1.6;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   margin: 0px;
 }
</style>
