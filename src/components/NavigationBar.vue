<template>
    <nav class="navbar flex p-3 items-center justify-between md:border-x-2 md:rounded-xl text-white text-xl sticky">
      <div class="flex flex-wrap">
        <router-link
         :to="{name: 'Home'}"
         class="flex items-center space-x-1 rtl:space-x-reverse">
         <img class="h-20" src="../assets/coxyburger.png">
         <span class="!text-white">Coxyburger</span>
        </router-link>
      </div>
      <div>
        <button id="hamburger-button" class="text-3xl md:hidden cursor-pointer">
          &#9776
        </button>
        <nav class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <router-link class="inline-block md:mr-4 hover:text-red-500" :to="{name: 'Burgers'}" exact>
                Burgers
              </router-link>
            </li>
            <li>
              <router-link class="inline-block md:mr-4 hover:text-red-500" :to="{name: 'Carte'}" exact>
                Carte
              </router-link>
            </li>
            <li>
              <router-link class="inline-block hover:text-red-500" :to="{name: 'Contact'}" exact>
                Contact
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <section id="mobile-menu" 
     class="absolute z-10 top-0 bg-[#234b90] sticky w-full h-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden">
      <button class="text-white text-7xl self-end px-6">
        &times;
      </button>
      <nav class="flex flex-col h-full items-center py-8" aria-label="mobile">
        <router-link
         :to="{name: 'Home'}"
         class="text-white w-full text-center py-6 hover:opacity-90 hover:text-red-500">
          Accueil
        </router-link>
        <router-link 
         :to="{name: 'Burgers'}" exact
         class="text-white w-full text-center py-6 hover:opacity-90 hover:text-red-500">
          Burgers
        </router-link>
        <router-link 
         :to="{name: 'Carte'}" exact
         class="text-white w-full text-center py-6 hover:opacity-90 hover:text-red-500">
          Carte
        </router-link>
        <router-link 
         :to="{name: 'Contact'}" exact
         class="text-white w-full text-center py-6 hover:opacity-90 hover:text-red-500">
          Contact
        </router-link>
      </nav>
    </section>
</template>
<script defer>
  const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const toggleMenu = () => {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('flex')
    }
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
  }

  document.addEventListener('DOMContentLoaded', initApp)
</script>

<style scoped>
.navbar {
  background: linear-gradient(180deg, #234b90 80%, #ffffff 81%, #922028 15%);
}
.router-link-active {
    @apply text-red-500;
}
</style>
