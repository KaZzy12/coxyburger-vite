<template>
  <MenuItemList :items="frites" :cols="1" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuFrites',
  components: { MenuItemList },
  data() {
    return { frites: menu.frites };
  },
};
</script>
