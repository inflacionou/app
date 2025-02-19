import { PriceUpdate } from "./PriceUpdate";

export type Product = {
  id: string;
  name: string;
  productUrl: string;
  productImage?: string;
  prices?: PriceUpdate[]
}

export type ProductWithPrices = Product & {
  prices: PriceUpdate[]
}
