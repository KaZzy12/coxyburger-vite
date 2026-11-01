<template>
  <MenuItemList :items="entries" :cols="1" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuVegetarien',
  components: { MenuItemList },
  data() {
    return { entries: menu.vegetarien };
  },
};
</script>
