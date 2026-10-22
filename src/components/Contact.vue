<template>
  <section
    id="contact"
    class="-z-50 -mt-[104px] lg:-mt-[136px] bg-cover bg-center lg:bg-left-top h-screen w-screen"
    style="background-image: url(images/batiment.JPG)"
  >
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div
        class="absolute max-w-[90vw] px-8 py-6 md:px-12 md:py-8 flex flex-col gap-4 text-center rounded-2xl bg-white/60 backdrop-blur-md border-2 border-white/80 ring-1 ring-black/10 shadow-2xl"
      >
        <h3 class="text-3xl font-bold">Coxyburger</h3>
        <div class="text-lg">
          <p>Rue du Baron d'Obin 132</p>
          <p>4219 Wasseiges</p>
        </div>
        <div class="text-lg">
          <p>Ouvert du mardi au dimanche de 17h30 à 21h</p>
          <p>et le mercredi de 11h30 à 13h30</p>
        </div>
        <p class="text-lg">0489/18.45.70</p>
        <div class="flex flex-row justify-center gap-3">
          <a href="https://maps.app.goo.gl/aLX5KuAphy4vmi5M8" class="hover:brightness-90">
            <img class="w-12" src="../assets/maps.png" />
          </a>
          <a href="https://www.facebook.com/coxyburger" class="hover:brightness-90">
            <img class="w-12" src="../assets/facebook.png" />
          </a>
          <a href="https://www.m.me/100013961950313" class="hover:brightness-90">
            <img class="w-12" src="../assets/messenger.png" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=32489184570" class="hover:brightness-90">
            <img class="w-12" src="../assets/whatsapp.png" />
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
