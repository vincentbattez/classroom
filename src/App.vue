<template>
  <div id="app">
    <Navbar />
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
