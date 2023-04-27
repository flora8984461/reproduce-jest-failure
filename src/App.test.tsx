import React from "react";
import * as fluentui from "@fluentui/react-components";
import { render, screen } from "@testing-library/react";
import { OverflowMenuItem } from "./ComponentToTest";

describe("Component to test", () => {
  it("Should not render hidden item", () => {
    jest
      .spyOn(fluentui, "useIsOverflowItemVisible")
      .mockImplementation(() => false);
    const { container } = render(<OverflowMenuItem id="2" />);
    expect(container).toMatchSnapshot();
    const button = screen.queryByRole("button");
    expect(button).toBeNull();
  });
});
