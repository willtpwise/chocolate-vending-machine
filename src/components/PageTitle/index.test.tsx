import React from "react";
import { screen, render } from "@testing-library/react";
import PageTitle from ".";

test("should render the page title", () => {
  const title = "Foo bar";

  render(<PageTitle title={title} />);

  expect(screen.getByText(title)).toBeVisible();
});
