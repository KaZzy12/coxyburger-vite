<template>
  <section id="contact" class="-z-50 -mt-[104px] lg:-mt-[136px] bg-cover h-screen w-screen" style=" background-image: url(images/batiment.png);">
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="bg-gray-100/70 rounded-2xl absolute">
        <div>
            <h3 class="text-2xl text-center font-bold">Coxyburger</h3>
            <p class="text-lg text-center">Rue du Baron d'Obin 132</p>
            <p class="text-lg text-center">4219 Wasseiges</p>
            <p class="text-lg text-center">Ouvert 7/7 de 17h30 à 21h</p>
            <p class="text-lg text-center">et le mercredi de 11h30 à 13h30</p>
            <p class="text-lg text-center">0489/18.45.70</p>
        </div>
        <div class="flex flex-row justify-center">
            <a href="https://maps.app.goo.gl/aLX5KuAphy4vmi5M8" class="hover:brightness-75">
              <img class="w-12" src="../assets/maps.png">
            </a>
            <a href="https://www.facebook.com/coxyburger" class="hover:brightness-75">
              <img class="w-12" src="../assets/facebook.png">
            </a>
            <a href="https://www.m.me/100013961950313" class="hover:brightness-75">
              <img class="w-12" src="../assets/messenger.png">
            </a>
            <a href="https://api.whatsapp.com/send?phone=32489184570" class="hover:brightness-75">
              <img class="w-12" src="../assets/whatsapp.png">
            </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      locationUrl: 'https://maps.app.goo.gl/aLX5KuAphy4vmi5M8',
    };
  },
};
</script>
