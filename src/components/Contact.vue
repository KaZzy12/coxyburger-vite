<template>
    <div class="h-full w-full flex flex-col items-center justify-center" id="contact">
        <div class="adress-container">
            <h3 class="text-xl text-center font-bold">Coxyburger</h3>
            <p>Rue du Baron d'Obin 132</p>
            <p>4219 Wasseiges</p>
            <p>Ouvert 7/7 de 17h30 à 21h</p>
            <p>et le mercredi de 11h30 à 13h30</p>
            <p>0489/18.45.70</p>
        </div>
        <div class="flex flex-row">
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
