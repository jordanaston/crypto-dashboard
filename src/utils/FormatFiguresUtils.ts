export function formatMarketCap(value: number): string {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(2) + " Bn";
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(2) + " Mn";
  } else {
    return value.toLocaleString("en-US");
  }
}

export function formatToTwoDecimalPlaces(value: number | undefined): string {
  return value ? value.toFixed(2) : "0.00";
}
