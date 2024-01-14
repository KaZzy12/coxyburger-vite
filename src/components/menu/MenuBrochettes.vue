<template>
  <ul>
    <li v-for="(brochette, idx) in brochettes" :key="idx">
      <h4>{{ brochette.name }} | {{ $filters.currency(brochette.price) }}</h4>
    </li>
  </ul>
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
