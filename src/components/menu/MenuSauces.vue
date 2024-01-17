<template>
  <div class="mt-5 w-screen gap-1 grid grid-cols-1 md:grid-cols-2">
    <div class="item" v-for="(sauce, idx) in sauces" :key="idx">
      <h4 class="text-lg font-bold text-center">{{ sauce.name }} | {{ $filters.currency(sauce.price) }}</h4>
    </div >
  </div>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { sauces: menu.sauces };
  },
};
</script>
