const priceFormatter = new Intl.NumberFormat('fr-BE', {
  style: 'currency',
  currency: 'EUR',
});

export function formatPrice(price) {
  return priceFormatter.format(price);
}
