import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Burgers from '../components/Burgers.vue';
import Carte from '../components/Carte.vue';
import Contact from '../components/Contact.vue';
import Home from '../components/Home.vue';
import MenuAlcools from '../components/menu/MenuAlcools.vue';
import MenuBrochettes from '../components/menu/MenuBrochettes.vue';
import MenuFrites from '../components/menu/MenuFrites.vue';
import MenuHamburgers from '../components/menu/MenuHamburgers.vue';
import MenuMitraillettes from '../components/menu/MenuMitraillettes.vue';
import MenuPetiteRestauration from '../components/menu/MenuPetiteRestauration.vue';
import MenuSauces from '../components/menu/MenuSauces.vue';
import MenuSnacks from '../components/menu/MenuSnacks.vue';
import MenuSofts from '../components/menu/MenuSofts.vue';
import MenuVegetarien from '../components/menu/MenuVegetarien.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/burgers',
      name: 'Burgers',
      component: Burgers,
    },
    {
      path: '/carte',
      name: 'Carte',
      component: Carte,
      children: [
        {
          name: 'BrowseAlcools',
          path: 'alcools',
          component: MenuAlcools,
        },
        {
          name: 'BrowseBrochettes',
          path: 'brochettes',
          component: MenuBrochettes,
        },
        {
          name: 'BrowseFrites',
          path: 'frites',
          component: MenuFrites,
        },
        {
          name: 'BrowseHamburgers',
          path: 'hamburgers',
          component: MenuHamburgers,
        },
        {
          name: 'Browsemitraillettes',
          path: 'mitraillettes',
          component: MenuMitraillettes,
        },
        {
          name: 'BrowsePetiteRestauration',
          path: 'petiterestauration',
          component: MenuPetiteRestauration,
        },
        {
          name: 'BrowseSauces',
          path: 'sauces',
          component: MenuSauces,
        },
        {
          name: 'BrowseSnacks',
          path: 'snacks',
          component: MenuSnacks,
        },
        {
          name: 'BrowseSofts',
          path: 'softs',
          component: MenuSofts,
        },
        {
          name: 'BrowseVegetarien',
          path: 'vegetatien',
          component: MenuVegetarien,
        },
      ],
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
