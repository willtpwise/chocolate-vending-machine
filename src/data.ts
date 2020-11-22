import caramel from "./images/products/caramel.jpg";
import hazelnut from "./images/products/hazelnut.jpg";
import organicRaw from "./images/products/organicRaw.jpg";

export type Product = {
  name: string;
  price: number;
  image: string;
};

/**
 * Products available to sell. Price in AUD cents
 */
export const products: Array<Product> = [
  {
    name: "Caramel",
    price: 250,
    image: caramel,
  },
  {
    name: "Hazelnut",
    price: 310,
    image: hazelnut,
  },
  {
    name: "Organic Raw",
    price: 200,
    image: organicRaw,
  },
];

/**
 * Accepted currency denominations in AUD cents
 */
export const denominations = [10, 20, 50, 100, 200];
