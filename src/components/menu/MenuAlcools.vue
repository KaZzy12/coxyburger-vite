<template>
  <div class="ml-5 gap-1 grid grid-cols-1 md:grid-cols-2">
    <div v-for="(alcool, idx) in alcools" :key="idx">
        <h4>{{ alcool.name }} | {{ $filters.currency(alcool.price) }}</h4>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { alcools: menu.alcools };
  },
};
</script>
