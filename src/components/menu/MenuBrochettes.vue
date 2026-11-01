<template>
  <MenuItemList :items="brochettes" :cols="2" />
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import MenuItemList from './MenuItemList.vue';

export default {
  name: 'MenuBrochettes',
  components: { MenuItemList },
  data() {
    return { brochettes: menu.brochettes };
  },
};
</script>
