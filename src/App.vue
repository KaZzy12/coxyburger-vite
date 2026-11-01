<script setup>
import TopBar from './components/TopBar.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="header">
    <TopBar />
    <NavigationBar />
  </div>
  <main>
    <router-view />
  </main>
</template>
