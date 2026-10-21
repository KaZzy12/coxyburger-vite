<template>
  <!-- Fills the viewport below the header (TopBar 32px on lg + navbar 80/100px + 6px border) -->
  <section
    class="relative isolate flex min-h-[calc(100svh-86px)] overflow-hidden bg-neutral-900 md:min-h-[calc(100svh-106px)] lg:min-h-[calc(100svh-138px)]"
    aria-labelledby="home-title"
  >
    <img
      src="/images/homeimage.jpg"
      alt=""
      class="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] md:object-center"
      fetchpriority="high"
    >
    <!-- Keeps the text readable: darker where the text sits, lighter on the photo -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/55 to-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-black/10"
      aria-hidden="true"
    ></div>

    <div class="mx-auto flex w-full max-w-screen-xl items-end px-4 pb-12 pt-24 md:items-center md:pb-24 md:pt-24">
      <div class="max-w-2xl text-white">
        <h1 id="home-title" class="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span class="block">Bienvenue chez Coxyburger,</span>
          <span class="mt-2 block font-normal text-white/90 lg:mt-3">
            là où la gourmandise prend tout son sens.
          </span>
        </h1>

        <router-link
          :to="{ name: 'Carte' }"
          class="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-burgundy px-7 py-4 text-lg font-semibold text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex sm:w-auto sm:py-3.5 md:mt-10"
        >
          Découvrir la carte
        </router-link>
      </div>
    </div>
  </section>
</template>
