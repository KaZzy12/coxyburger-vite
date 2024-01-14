<template>
    <nav class="navbar flex w-auto p-3 items-center justify-between border-x-2 rounded-xl text-white text-xl">
      <div class="flex flex-wrap">
        <router-link
         :to="{name: 'Home'}"
         class="flex items-center space-x-1 rtl:space-x-reverse">
         <img class="h-20" src="../assets/coxyburger.png">
         <span>Coxyburger</span>
        </router-link>
      </div>
      <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
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
      </div>
    </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(180deg, #234b90 80%, #ffffff 81%, #922028 15%);
}
</style>
