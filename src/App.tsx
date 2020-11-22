import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import PageTitle from "./components/PageTitle";
import PurchasePopup from "./components/PurchasePopup";
import TransactionBalance from "./components/TransactionBalance";
import { denominations, Product, products } from "./data";
import { formatCurrency } from "./services/formatCurrency";

export default function App() {
  const [
    lastPurchasedProduct,
    setLastPurchasedProduct,
  ] = useState<Product | null>(null);
  const [transactionBalance, setTransactionBalance] = useState(0);

  const purchaseProduct = (product: Product) => {
    setTransactionBalance(transactionBalance - product.price);
    setLastPurchasedProduct({ ...product });
  };

  return (
    <article className="app">
      <PageTitle title="Awesome Vegan Snacks" />

      <main>
        <TransactionBalance value={transactionBalance} />

        <Button.Group>
          <>
            {denominations.map((denomination, i) => (
              <Button
                key={i}
                name="denominationButton"
                title={formatCurrency(denomination)}
                onClick={() =>
                  setTransactionBalance(transactionBalance + denomination)
                }
              />
            ))}
          </>
        </Button.Group>

        <hr />

        <Button.Group isBlock>
          <>
            {products.map((product, i) => (
              <Button
                key={i}
                name="productButton"
                title={product.name}
                subTitle={formatCurrency(product.price)}
                isDisabled={transactionBalance < product.price}
                onClick={() => purchaseProduct(product)}
              />
            ))}
          </>
        </Button.Group>

        <PurchasePopup product={lastPurchasedProduct} />
      </main>
    </article>
  );
}
