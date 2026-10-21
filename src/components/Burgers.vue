<script setup>
import { burgers } from '../burgers/burgers';
import BurgerCard from './BurgerCard.vue';
</script>

<template>
  <div id="burgers" class="mx-auto max-w-7xl px-4 py-8">
    <div class="flex flex-wrap justify-center gap-6">
      <BurgerCard
        v-for="burger in burgers"
        :key="burger.id"
        :burger="burger"
      />
    </div>
  </div>
</template>
