<template>
  <MenuItemList :items="sauces" :cols="2" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuSauces',
  components: { MenuItemList },
  data() {
    return { sauces: menu.sauces };
  },
};
</script>
