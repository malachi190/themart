const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export default function Currency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
