import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { KotakKaler } from ".";

// Prompt:
// Write a jest jsdom test for the imported KotakKaler component.
// The test test that component is loaded properly
describe("KotakKaler", () => {
  it("should render the KotakKaler component", () => {
    render(<KotakKaler />);

    const colorBox = screen.getByTestId("kotak-kaler-container");

    expect(colorBox).toBeInTheDocument();
  });
});
