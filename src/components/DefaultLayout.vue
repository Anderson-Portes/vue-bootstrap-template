<script setup>
import Navbar from './Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar />
  <div class="py-5 container">
    <RouterView />
  </div>
</template>