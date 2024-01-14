<template>
  <ul>
    <li v-for="(entry, idx) in entries" :key="idx">
      <h4>{{ entry.name }} | {{ $filters.currency(entry.price) }}</h4>
    </li>
  </ul>
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
