<!-- TopBar.vue -->
<template>
  <nav class="h-8 bg-gray-200 border-sky-100 hidden lg:block">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-1 text-gray-500">
      <a href="https://maps.app.goo.gl/aLX5KuAphy4vmi5M8" class="flex items-center space-x-1 rtl:space-x-reverse hover:text-gray-900">
        <img class="bottom-1 h-5" src="../assets/map_pin_icon.png">
        <span class="self-center whitespace-nowrap">Rue du Baron d'Obin 132 - 4219 Wasseiges</span>
      </a>
      <div class="flex items-center space-x-1 rtl:space-x-reverse">
        <img class="bottom-1 h-5" src="../assets/clock.png">
        Lundi - dimanche: 17h30 - 21h | Mercredi 11h30 - 13h30
      </div>
      <div class="flex items-center space-x-1 rtl:space-x-reverse">
        <img class="bottom-1 h-5" src="../assets/phone.png">
        <span class="self-center whitespace-nowrap">0489 18 45 70</span>
      </div>
    </div>
  </nav>
</template>
