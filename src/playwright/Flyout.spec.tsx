import React from "react";
import { test, expect } from "@playwright/experimental-ct-react17";
import { Flyout } from "../Flyout";

test("should work", async ({ mount, page }) => {
  const component = await mount(<Flyout />);

  const button = page.getByRole("button");

  await button.click();

  const dialog = page.getByText("AAAA");

  await expect(dialog).toHaveScreenshot();
  await expect(dialog).toContainText("AAAA");
});
