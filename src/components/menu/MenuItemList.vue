<template>
  <div class="w-screen flex justify-center px-2">
    <div class="mt-5 w-full max-w-4xl rounded-lg border-2 border-burgundy bg-white p-4 shadow-md">
      <ul
        class="grid grid-cols-1 gap-x-10 gap-y-2 md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
        :style="{ '--cols': cols }"
      >
        <li
          v-for="item in items"
          :key="item.id ?? item.name"
          class="flex items-baseline gap-2 text-lg"
        >
          <span class="font-semibold">{{ item.name }}</span>
          <span
            class="flex-1 translate-y-[-0.05em] border-b-2 border-dotted border-gray-400"
            aria-hidden="true"
          ></span>
          <span class="font-bold whitespace-nowrap">{{ formatPrice(item.price) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const priceFormatter = new Intl.NumberFormat('fr-BE', {
  style: 'currency',
  currency: 'EUR',
});

export default {
  name: 'MenuItemList',
  props: {
    items: {
      type: Array,
      required: true,
    },
    cols: {
      type: Number,
      default: 1,
      validator: (value) => Number.isInteger(value) && value > 0,
    },
  },
  methods: {
    formatPrice(price) {
      return priceFormatter.format(price);
    },
  },
};
</script>
