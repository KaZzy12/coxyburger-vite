<template>
  <MenuItemList :items="snacks" :cols="2" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuSnacks',
  components: { MenuItemList },
  data() {
    return { snacks: menu.snacks };
  },
};
</script>
