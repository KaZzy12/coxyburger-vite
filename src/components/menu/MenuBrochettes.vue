<template>
  <div class="mt-5 w-screen gap-1 grid grid-cols-1 md:grid-cols-2">
    <div v-for="(brochette, idx) in brochettes" :key="idx">
      <h4 class="text-lg font-bold text-center">{{ brochette.name }} | {{ $filters.currency(brochette.price) }}</h4>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { brochettes: menu.brochettes };
  },
};
</script>
