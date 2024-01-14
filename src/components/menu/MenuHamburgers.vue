<template>
  <ul>
    <li v-for="(hamburger, idx) in hamburgers" :key="idx">
      <h4>{{ hamburger.name }} | {{ $filters.currency(hamburger.price) }}</h4>
    </li>
  </ul>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { hamburgers: menu.hamburgers };
  },
};
</script>
