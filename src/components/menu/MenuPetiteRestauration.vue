<template>
  <div class="w-screen grid place-items-center">
    <div class="mt-5 gap-1 grid grid-cols-1 md:grid-cols-2">
      <div v-for="(entry, idx) in entries" :key="idx">
        <h4 class="text-lg font-bold text-center">{{ entry.name }} | {{ $filters.currency(entry.price) }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { entries: menu.petiteRestauration };
  },
};
</script>
