<template>
  <MenuItemList :items="mitraillettes" :cols="1" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuMitraillettes',
  components: { MenuItemList },
  data() {
    return { mitraillettes: menu.mitraillettes };
  },
};
</script>
