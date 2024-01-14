<template>
  <ul>
    <li v-for="(mitraillette, idx) in mitraillettes" :key="idx">
      <h4>{{ mitraillette.name }} | {{ $filters.currency(mitraillette.price) }}</h4>
    </li>
  </ul>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { mitraillettes: menu.mitraillettes };
  },
};
</script>
