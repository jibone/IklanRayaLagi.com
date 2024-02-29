import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ColorBox } from ".";

// Prompt:
// Write a jest jsdom test for the imported ColorBox component.
// The test test that component is loaded properly
describe("ColorBox", () => {
  it("should render the ColorBox component", () => {
    render(<ColorBox />);

    const colorBox = screen.getByTestId("color-box");

    expect(colorBox).toBeInTheDocument();
  });
});
