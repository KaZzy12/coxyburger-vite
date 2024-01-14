<template>
    <div id="burgers">
      <div class="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 ">
        <!-- Loop through the burgers array and display them -->
        <div class="h-72 overflow-hidden"
          v-for="burger in listBurgers" :key="burger.id">
          <!-- Burger content goes here -->
          <div class="w-48 ml-4 flex-none relative">
            <img :src="burger.image" alt="Burger Image" class="rounded-xl absolute">
          </div>
          <div class="ml-52 h-64 p-2 bg-gray-100 rounded-r-xl">
            <h3 class="text-xl">{{ burger.name }}</h3>
            <p class="text-sm">{{ burger.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { burgers } from '../burgers/burgers';

const listBurgers = burgers;

export default {
  data() {
    return {
      listBurgers,
    };
  },
};
</script>
