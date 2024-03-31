import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

// Prompt:
// Write a jest jsdom test for the imported Header component.
// The test test that component is loaded properly
describe("Header", () => {
  it("should render the Header component", () => {
    render(<Header page="" />);

    const header = screen.getByTestId("header");
    const titleBar = screen.getByTestId("logo-lebar-container");

    expect(header).toBeInTheDocument();
    expect(titleBar).toBeInTheDocument();
  });
});
