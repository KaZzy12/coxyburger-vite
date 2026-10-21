<script setup>
import { nextTick, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const categories = [
  { label: 'Frites', route: 'BrowseFrites' },
  { label: 'Hamburgers', route: 'BrowseHamburgers' },
  { label: 'Mitraillettes', route: 'Browsemitraillettes' },
  { label: 'Brochettes', route: 'BrowseBrochettes' },
  { label: 'Snacks', route: 'BrowseSnacks' },
  { label: 'Petite restauration', route: 'BrowsePetiteRestauration' },
  { label: 'Sauces', route: 'BrowseSauces' },
  { label: 'Végétarien', route: 'BrowseVegetarien' },
  { label: 'Softs', route: 'BrowseSofts' },
  { label: 'Bières/Vin', route: 'BrowseAlcools' },
];

const route = useRoute();
const nav = ref(null);

// Keep the selected category visible when the tab bar overflows (mobile).
watch(
  () => route.name,
  async () => {
    await nextTick();
    const list = nav.value;
    const active = list?.querySelector('[aria-current="page"]');
    if (!active) return;
    // Scroll the tab bar only; scrollIntoView would also scroll the page.
    list.scrollTo({
      left: active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2,
      behavior: 'smooth',
    });
  },
  { immediate: true },
);
</script>

<template>
  <section id="carte" class="bg-gray-200 min-h-screen min-w-fit">
    <nav
      aria-label="Catégories de la carte"
      class="sticky top-0 z-10 bg-gray-200/95 backdrop-blur border-b border-gray-300"
    >
      <ul
        ref="nav"
        class="relative flex w-0 min-w-full gap-2 overflow-x-auto px-4 py-3 snap-x scroll-px-4 md:flex-wrap md:justify-center md:overflow-visible"
      >
        <li v-for="category in categories" :key="category.route" class="snap-start shrink-0">
          <router-link
            :to="{ name: category.route }"
            active-class="!bg-burgundy !border-burgundy shadow-md"
            class="group block rounded-full border border-[#234b90] bg-[#234b90] px-5 py-2.5 text-md text-white whitespace-nowrap transition duration-150 ease-in-out"
          >
            <span class="inline-block transition-transform duration-150 ease-out group-hover:scale-110 motion-reduce:transform-none">
              {{ category.label }}
            </span>
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view v-if="$route.matched.length > 1"></router-view>
    <p v-else class="px-4 py-16 text-center text-gray-500">
      Choisissez une catégorie pour découvrir la carte.
    </p>
  </section>
</template>
