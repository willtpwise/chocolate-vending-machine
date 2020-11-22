/**
 * Converts and formats the value (which is a whole number in cents) to the
 * nearest denomination (dollars or cents)
 */
export const formatCurrency = (value: number): string => {
  if (value >= 100 || value === 0) {
    return `$${(value / 100).toFixed(2)}`;
  }

  return `${value}c`;
};
