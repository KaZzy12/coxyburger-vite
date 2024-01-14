<template>
    <div class="section" id="contact">
        <h2>Contact</h2>
        <div class="adress-container">
            <h3>Coxyburger</h3>
            <p>Rue du Baron d'Obin 132</p>
            <p>4219 Wasseiges</p>
            <p>Ouvert 7/7 de 17h30 à 21h</p>
            <p>et le mercredi de 11h30 à 13h30</p>
            <p>0489/18.45.70</p>
        </div>
        <div>
            <a href="https://maps.app.goo.gl/aLX5KuAphy4vmi5M8">
              <img class="social" src="../assets/maps.png">
            </a>
            <a href="https://www.facebook.com/coxyburger">
              <img class="social" src="../assets/facebook.png">
            </a>
            <a href="https://www.m.me/100013961950313">
              <img class="social" src="../assets/messenger.png">
            </a>
            <a href="https://api.whatsapp.com/send?phone=32489184570">
              <img class="social" src="../assets/whatsapp.png">
            </a>
        </div>
        <div class="socials-container">
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

<style>
.social {
  width: 50px;
}
</style>
