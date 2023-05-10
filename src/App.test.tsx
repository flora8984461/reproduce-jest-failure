import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Flyout } from "./Flyout";

describe("Component to test", () => {
  it("Render flyout", () => {
    const { container } = render(<Flyout open />);
    const content = screen.getByText("AAAA");
    expect(content).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
