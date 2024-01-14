/* eslint-disable import/no-named-as-default */
import alcoolsMenu from './alcoolsMenu';
import brochettesMenu from './brochettesMenu';
import fritesMenu from './fritesMenu';
import hamburgersMenu from './hamburgersMenu';
import mitraillettesMenu from './mitraillettesMenu';
import petiteRestaurationMenu from './petiteRestaurationMenu';
import saucesMenu from './saucesMenu';
import snacksMenu from './snacksMenu';
import softsMenu from './softsMenu';
import vegetarienMenu from './vegetarienMenu';

export const menu = {
  frites: fritesMenu,
  hamburgers: hamburgersMenu,
  mitraillettes: mitraillettesMenu,
  brochettes: brochettesMenu,
  snacks: snacksMenu,
  petiteRestauration: petiteRestaurationMenu,
  sauces: saucesMenu,
  vegetarien: vegetarienMenu,
  softs: softsMenu,
  alcools: alcoolsMenu,
};
export default menu;
