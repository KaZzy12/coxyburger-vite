<template>
  <MenuItemList :items="hamburgers" :cols="1" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuHamburgers',
  components: { MenuItemList },
  data() {
    return { hamburgers: menu.hamburgers };
  },
};
</script>
