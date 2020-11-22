import React from "react";
import { screen, render, act } from "@testing-library/react";
import PurchasePopup from ".";
import { products } from "../../data";

jest.useFakeTimers();

describe("PurchasePopup", () => {
  const product = products[0];

  test("should render the product then hide it after 3 seconds", () => {
    render(<PurchasePopup product={product} />);

    expect(screen.getByRole("alert")).toHaveClass("isVisible");
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByRole("alert")).not.toHaveClass("isVisible");
  });

  test("should be hidden when there is no product", () => {
    render(<PurchasePopup product={null} />);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
