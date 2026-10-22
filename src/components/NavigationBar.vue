<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const PHONE_LABEL = '0489 18 45 70';
const PHONE_HREF = 'tel:+32489184570';
const MD_BREAKPOINT = 768;

const route = useRoute();
const isMenuOpen = ref(false);
const menuButton = ref(null);
const closeButton = ref(null);

const links = [
  { label: 'Carte', to: { name: 'Carte' } },
  { label: 'Contact', to: { name: 'Contact' } },
];

const openMenu = async () => {
  isMenuOpen.value = true;
  await nextTick();
  closeButton.value?.focus();
};

const closeMenu = ({ restoreFocus = false } = {}) => {
  if (!isMenuOpen.value) return;
  isMenuOpen.value = false;
  if (restoreFocus) menuButton.value?.focus();
};

const onKeydown = (event) => {
  if (event.key === 'Escape') closeMenu({ restoreFocus: true });
};

const onResize = () => {
  if (window.innerWidth >= MD_BREAKPOINT) closeMenu();
};

// Prevent the page from scrolling behind the open drawer.
watch(isMenuOpen, (open) => {
  document.body.classList.toggle('overflow-hidden', open);
});

watch(() => route.fullPath, () => closeMenu());

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  window.removeEventListener('resize', onResize);
  document.body.classList.remove('overflow-hidden');
});
</script>

<template>
  <header class="relative z-20 border-b-[6px] border-burgundy bg-[#234b90] text-white shadow-md">
    <div class="mx-auto flex h-20 max-w-screen-xl items-center justify-between gap-4 px-4 md:h-[100px]">
      <!-- Left: brand -->
      <router-link
        :to="{ name: 'Home' }"
        class="flex items-center gap-2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:gap-4"
        aria-label="Coxyburger - Accueil"
      >
        <span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-lg ring-4 ring-burgundy md:h-[84px] md:w-[84px]">
          <img class="h-full w-full object-contain" src="../assets/coxyburger-logo.webp" width="256" height="251" alt="">
        </span>
        <span class="text-xl font-extrabold uppercase leading-none tracking-wider !text-white sm:text-2xl md:text-3xl">
          Coxyburger
        </span>
      </router-link>

      <!-- Right: menu -->
      <div class="flex items-center justify-end">
        <button
          ref="menuButton"
          type="button"
          class="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:hidden"
          aria-label="Ouvrir le menu"
          aria-controls="mobile-menu"
          :aria-expanded="isMenuOpen"
          @click="openMenu"
        >
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav class="hidden md:block" aria-label="Navigation principale">
          <ul class="flex items-center gap-8 text-lg font-semibold uppercase tracking-wide">
            <li v-for="link in links" :key="link.label">
              <router-link
                :to="link.to"
                class="nav-link relative inline-block py-2 text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Mobile drawer (opens from the right, like the menu button) -->
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out motion-reduce:transition-none"
      leave-active-class="transition-opacity duration-150 ease-in motion-reduce:transition-none"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black/60 md:hidden" @click="closeMenu({ restoreFocus: true })"></div>
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-200 ease-out motion-reduce:transition-none"
      leave-active-class="transition-transform duration-150 ease-in motion-reduce:transition-none"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="isMenuOpen"
        id="mobile-menu"
        class="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto border-l-4 border-burgundy bg-[#234b90] shadow-2xl md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div class="flex h-20 shrink-0 items-center justify-between px-4">
          <span class="text-lg font-extrabold uppercase tracking-wider">Menu</span>
          <button
            ref="closeButton"
            type="button"
            class="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Fermer le menu"
            @click="closeMenu({ restoreFocus: true })"
          >
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col text-2xl font-semibold" aria-label="Navigation mobile">
          <router-link
            :to="{ name: 'Home' }"
            class="drawer-link border-b border-white/15 px-4 py-4 transition-colors hover:bg-white/10"
          >
            Accueil
          </router-link>
          <router-link
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="drawer-link border-b border-white/15 px-4 py-4 transition-colors hover:bg-white/10"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <div class="mt-auto space-y-4 p-4 text-base text-white/90">
          <a
            :href="PHONE_HREF"
            class="block underline-offset-4 hover:underline"
          >
            {{ PHONE_LABEL }}
          </a>
          <a
            href="https://maps.app.goo.gl/aLX5KuAphy4vmi5M8"
            class="block underline-offset-4 hover:underline"
          >
            Rue du Baron d'Obin 132 - 4219 Wasseiges
          </a>
          <p>Mardi - Dimanche : 17h30 - 21h<br>Mercredi : 11h30 - 13h30</p>
        </div>
      </aside>
    </Transition>
  </header>
</template>

<style scoped>
/* Burgundy is as dark as the navbar blue (~1:1), so the indicator is white. */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  border-radius: 9999px;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 200ms ease-out, opacity 200ms ease-out;
}

.nav-link:hover::after {
  opacity: 0.4;
  transform: scaleX(1);
}

.nav-link.router-link-active {
  color: #fff;
}

.nav-link.router-link-active::after {
  opacity: 1;
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .nav-link::after {
    transition: none;
  }
}

.drawer-link.router-link-active {
  background-color: #922028;
}
</style>
