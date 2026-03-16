const intl = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
});
export const priceConverter = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
