import { formatCurrency } from "./formatCurrency";

test.each`
  value     | formatted
  ${0}      | ${"$0.00"}
  ${10}     | ${"10c"}
  ${100}    | ${"$1.00"}
  ${110}    | ${"$1.10"}
  ${10000}  | ${"$100.00"}
  ${100000} | ${"$1000.00"}
`("should format the value=$value to $formatted", ({ value, formatted }) => {
  expect(formatCurrency(value)).toBe(formatted);
});
