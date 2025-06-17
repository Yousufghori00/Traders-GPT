<!-- <template>
  <h1>The sidebar is {{ collapsed ? 'closed' : 'open' }}</h1>
  <button @click="toggleSidebar">Toggle Sidebar</button>
</template>

<script>
// import { collapsed, toggleSidebar } from '@/components/sidebar/state'

// export default {
//   setup() {
//     return { collapsed, toggleSidebar }
//   }
// }
</script> -->

<template>
    <div class="card flex justify-center">
        <Rating v-model="value" />
    </div>
</template>

<script>
import Rating from 'primevue/rating';
  export default {
    components: {
      Rating
    },
  }
</script>
<script setup>
import { ref } from 'vue';
const value = ref(null);
</script>