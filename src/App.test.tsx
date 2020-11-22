import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  test("clicking on a denomination should increase the balance", () => {
    render(<App />);

    act(() => {
      fireEvent.click(screen.getByText("10c"));
    });

    expect(screen.getByText("Balance: 10c")).toBeInTheDocument();
  });

  test("clicking on multiple denomination should increase the balance", () => {
    render(<App />);

    act(() => {
      fireEvent.click(screen.getByText("10c"));
    });
    act(() => {
      fireEvent.click(screen.getByText("50c"));
    });

    expect(screen.getByText("Balance: 60c")).toBeInTheDocument();
  });

  test("should have all products disabled when the transaction balance is 0", () => {
    const { container } = render(<App />);

    const buttons = container.querySelectorAll(
      '[role="button"][name="productButton"][disabled]'
    );

    expect(buttons).toHaveLength(3);
  });

  test("should enable a product once the transaction balance has been met", () => {
    render(<App />);

    act(() => {
      fireEvent.click(screen.getAllByText("$2.00")[0]);
    });
    act(() => {
      fireEvent.click(screen.getAllByText("50c")[0]);
    });

    expect(screen.getByText("Caramel")).not.toBeDisabled();
  });

  test("should show the purchase popup and adjust the transaction balance after purchasing", () => {
    render(<App />);

    act(() => {
      fireEvent.click(screen.getAllByText("$2.00")[0]);
    });
    act(() => {
      fireEvent.click(screen.getAllByText("$1.00")[0]);
    });

    fireEvent.click(screen.getByText("Caramel"));

    expect(screen.getByTestId("purchasePopup")).toBeVisible();
    expect(screen.getByText("Balance: 50c")).toBeVisible();
  });

  test("should not be able to purchase a product with an insufficient balance", () => {
    render(<App />);

    act(() => {
      fireEvent.click(screen.getAllByText("$2.00")[0]);
    });

    fireEvent.click(screen.getByText("Caramel"));

    expect(screen.queryByTestId("purchasePopup")).not.toBeInTheDocument();
    expect(screen.getByText("Balance: $2.00")).toBeVisible();
  });
});
