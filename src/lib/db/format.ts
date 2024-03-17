export function formatPrice(price: number) {
  return (price / 100).toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
}
