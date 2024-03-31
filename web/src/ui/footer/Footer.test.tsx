import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from ".";

// Prompt:
// Write a jest jsdom test for the imported Footer component.
// The test test that component is loaded properly
describe("Footer", () => {
  it("should render the Footer component", () => {
    render(<Footer page="tester" />);

    // these components must be loaded
    const footer = screen.getByTestId("footer");
    const kotakKaler = screen.getByTestId("kotak-kaler-container");

    expect(footer).toBeInTheDocument();
    expect(kotakKaler).toBeInTheDocument();
  });
});
