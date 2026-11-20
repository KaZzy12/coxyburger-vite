<template>
  <div class="w-full flex justify-center px-2">
    <div class="mt-5 w-full max-w-4xl">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <article
          v-for="bowl in coxybowl.bowls"
          :key="bowl.id"
          class="flex flex-col rounded-lg border-2 border-burgundy bg-white p-4 shadow-md"
        >
          <header class="flex items-baseline gap-2 text-xl">
            <h3 class="font-bold">Coxybowl {{ bowl.name }}</h3>
            <span
              class="min-w-4 flex-1 translate-y-[-0.05em] border-b-2 border-dotted border-gray-400"
              aria-hidden="true"
            ></span>
            <span class="font-bold whitespace-nowrap text-burgundy">
              {{ formatPrice(bowl.price) }}
            </span>
          </header>

          <ul class="mt-5 space-y-3 text-lg">
            <li>
              <span class="font-semibold">{{ bowl.fries }}</span>
            </li>
            <li>
              <span class="font-semibold"> {{ bowl.meatCount }} choix de viande </span>
              <span class="text-gray-600"> parmi :</span>
              <ul class="mt-1 list-disc pl-6 text-gray-800">
                <li v-for="meat in bowl.meats" :key="meat">{{ meat }}</li>
              </ul>
            </li>
            <li v-for="item in coxybowl.included" :key="item" class="font-semibold">
              {{ item }}
            </li>
          </ul>
        </article>
      </div>

      <section class="mt-5 rounded-lg border-2 border-burgundy bg-white p-4 shadow-md">
        <h3 class="text-xl font-bold">Suppléments</h3>
        <p class="mt-1 text-gray-600">
          {{ formatPrice(coxybowl.supplements.price) }} par ingrédient
        </p>
        <ul class="mt-4 grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-3">
          <li
            v-for="item in coxybowl.supplements.items"
            :key="item"
            class="flex items-baseline gap-2 text-lg"
          >
            <span class="font-semibold">{{ item }}</span>
            <span
              class="min-w-4 flex-1 translate-y-[-0.05em] border-b-2 border-dotted border-gray-400"
              aria-hidden="true"
            ></span>
            <span class="font-bold whitespace-nowrap">
              +{{ formatPrice(coxybowl.supplements.price) }}
            </span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-named-as-default */
import menu from '../../menu/menu';
import { formatPrice } from '../../shared/format-price';

export default {
  name: 'MenuCoxybowl',
  data() {
    return { coxybowl: menu.coxybowl };
  },
  methods: {
    formatPrice,
  },
};
</script>
