import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

// Prompt:
// Write a jest jsdom test for the imported Header component.
// The test test that component is loaded properly
describe("Header", () => {
  it("should render the Header component", () => {
    render(<Header />);

    const header = screen.getByTestId("header");
    const colorBox = screen.getByTestId("color-box");
    const titleBar = screen.getByTestId("title-bar");

    expect(header).toBeInTheDocument();
    expect(colorBox).toBeInTheDocument();
    expect(titleBar).toBeInTheDocument();
  });
});
