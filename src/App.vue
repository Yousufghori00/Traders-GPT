<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->


<script>
// import Sidebar from './components/sidebar/Sidebar.vue'
import Sidebar from './components/sidebar/SideBar2.vue'
// import Navbar from '@/components/sidebar/Navbar'
import Navbar from './components/sidebar/Navbar2.vue'

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
  <div style="margin-left: 380px;">
    <router-view />
  </div>
</template>



<style scoped>
@import url('../src/assets/main.css');
</style>
<style>
#app {
   font-family: "Montserrat"!important;
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
