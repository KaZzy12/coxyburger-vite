<template>
  <ul class="ml-5 grid grid-cols-1 md:grid-cols-2">
    <li v-for="(alcool, idx) in alcools" :key="idx"
      class="p-1 flex-none">
        <h4>{{ alcool.name }} | {{ $filters.currency(alcool.price) }}</h4>
    </li>
  </ul>
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
