<template>
  <div class="mt-5 w-screen">
    <div v-for="(frite, idx) in frites" :key="idx">
      <h4 class="text-lg font-bold text-center">{{ frite.name }} | {{ $filters.currency(frite.price) }}</h4>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { frites: menu.frites };
  },
};
</script>
