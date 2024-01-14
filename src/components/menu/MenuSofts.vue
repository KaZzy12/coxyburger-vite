<template>
  <ul>
    <li v-for="(soft, idx) in softs" :key="idx">
      <h4>{{ soft.name }} | {{ $filters.currency(soft.price) }}</h4>
    </li>
  </ul>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';

export default {
  name: 'MenuFrites',
  data() {
    return { softs: menu.softs };
  },
};
</script>
