import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Product } from "../../data";
import "./index.css";

type Props = {
  product: Product | null;
};

export default function PurchasePopup(props: Props) {
  const { product } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (product) {
      const currentProduct = product;
      setIsVisible(true);
      setTimeout(() => {
        if (currentProduct === product) {
          setIsVisible(false);
        }
      }, 3000);
    }
  }, [product]);

  if (product) {
    return (
      <div
        className={classNames("purchasePopup", { isVisible })}
        role="alert"
        data-testid="purchasePopup"
        aria-label="Dispensing now"
      >
        <img src={product.image} alt={product.name} />
      </div>
    );
  }

  return null;
}
