<template>
  <MenuItemList :items="softs" :cols="1" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuSofts',
  components: { MenuItemList },
  data() {
    return { softs: menu.softs };
  },
};
</script>
