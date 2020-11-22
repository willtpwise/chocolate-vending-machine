import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from ".";

describe("Button", () => {
  const props = {
    title: "foo",
    onClick: jest.fn(),
    isDisabled: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render the title correctly", () => {
    render(<Button {...props} />);

    expect(screen.getByText(props.title)).toBeVisible();
  });

  test("should render the sub title correctly", () => {
    const subTitle = "bar";

    render(<Button {...props} subTitle={subTitle} />);

    expect(screen.getByText(subTitle)).toBeVisible();
  });

  test("should render the name attribute", () => {
    const name = "foo";

    render(<Button {...props} name={name} />);

    expect(screen.getByRole("button", { name })).toBeVisible();
  });

  test("clicking the button should fire the onClick event", () => {
    render(<Button {...props} />);
    const button = screen.queryByRole("button");

    fireEvent.click(button!);

    expect(props.onClick).toHaveBeenCalled();
  });

  test.each([true, false])(
    "the isDisabled=%p prop should disable/enable the button",
    (isDisabled) => {
      render(<Button {...props} isDisabled={isDisabled} />);
      const button = screen.queryByRole("button");

      expect(button!.hasAttribute("disabled")).toBe(isDisabled);
    }
  );

  test("should be enabled by default", () => {
    render(<Button {...props} isDisabled={undefined} />);
    const button = screen.queryByRole("button");

    expect(button).not.toBeDisabled();
  });

  describe("Group", () => {
    const children = (
      <>
        <Button {...props} title={"first button"} />
        <Button {...props} title={"second button"} />
      </>
    );
    test("should render each of the buttons", () => {
      render(<Button.Group>{children}</Button.Group>);
      expect(screen.getByText("first button")).toBeVisible();
      expect(screen.getByText("second button")).toBeVisible();
    });

    test.each([true, false])(
      "the isBlock=%p prop should add/remove the isBlock class",
      (isBlock) => {
        render(<Button.Group isBlock={isBlock}>{children}</Button.Group>);
        const group = screen.queryByRole("group");

        expect(group?.classList.contains("isBlock")).toBe(isBlock);
      }
    );

    test("isBlock should disabled by default", () => {
      render(<Button.Group isBlock={undefined}>{children}</Button.Group>);
      const group = screen.queryByRole("group");

      expect(group).not.toHaveClass("isBlock");
    });
  });
});
