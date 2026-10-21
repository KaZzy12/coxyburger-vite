<script setup>
defineProps({
  burger: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="w-full max-w-[18rem] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
    <div class="relative">
      <img
        :src="burger.image"
        :alt="burger.name"
        loading="lazy"
        class="block aspect-[3/4] w-full object-cover"
      >
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-white to-transparent" />
    </div>

    <div class="relative px-5 pb-5 pt-2">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {{ burger.name }}
      </h3>
      <p class="text-sm leading-relaxed text-gray-600">
        {{ burger.description }}
      </p>
    </div>
  </article>
</template>
