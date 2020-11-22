import React from "react";
import { formatCurrency } from "../../services/formatCurrency";
import classNames from "classnames";
import "./index.css";

type Props = {
  value: number;
};

export default function TransactionBalance(props: Props) {
  const { value } = props;

  const isVisible = value > 0;

  return (
    <div className={classNames("transactionBalance", { isVisible })}>
      Balance: {formatCurrency(value)}
    </div>
  );
}
