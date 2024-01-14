<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TopBar from './components/TopBar.vue';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class ="header">
    <TopBar/>
    <NavigationBar/>
  </div>
  <div class="container">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
