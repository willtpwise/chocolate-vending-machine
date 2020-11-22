import React from "react";
import TransactionBalance from ".";
import { formatCurrency } from "../../services/formatCurrency";
import { screen, render } from "@testing-library/react";

jest.mock("../../services/formatCurrency");
describe("TransactionBalance", () => {
  const mockedValue = "formatted-value";
  beforeEach(() => {
    (formatCurrency as jest.Mock).mockReturnValue(mockedValue);
  });

  test("should display the formatted currency", () => {
    render(<TransactionBalance value={100} />);

    expect(screen.getByText(`Balance: ${mockedValue}`)).toHaveClass(
      "isVisible"
    );
  });

  test("should be hidden if the value is zero", () => {
    render(<TransactionBalance value={0} />);

    expect(screen.getByText(`Balance: ${mockedValue}`)).not.toHaveClass(
      "isVisible"
    );
  });

  test("should be visible if the value is greater than zero", () => {
    render(<TransactionBalance value={1} />);

    expect(screen.getByText(`Balance: ${mockedValue}`)).toHaveClass(
      "isVisible"
    );
  });
});
