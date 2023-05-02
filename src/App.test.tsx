import React from "react";
// import * as fluentui from "@fluentui/react-components";
import { render, screen } from "@testing-library/react";
import { OverflowMenuItem } from "./ComponentToTest";

describe("Component to test", () => {
  it("Should not render hidden item", () => {
    // jest
    //   .spyOn(fluentui, "useIsOverflowItemVisible")
    //   .mockImplementation(() => false);

    jest.mock("@fluentui/react-components", () => ({
      ...jest.requireActual("@fluentui/react-components"), // use actual for all non-hook parts
      useIsOverflowItemVisible: jest.fn(() => true),
    }));

    const { container } = render(<OverflowMenuItem id="2" />);
    expect(container).toMatchSnapshot();
    const menuitem = screen.queryByRole("menuitem");
    expect(menuitem).toBeNull();
  });
});
