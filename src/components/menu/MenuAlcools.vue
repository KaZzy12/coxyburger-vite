<template>
  <MenuItemList :items="alcools" :cols="1" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuAlcools',
  components: { MenuItemList },
  data() {
    return { alcools: menu.alcools };
  },
};
</script>
