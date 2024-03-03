import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TitleBar } from ".";

// Prompt:
// Write a jest jsdom test for the imported TitleBar component.
// The test test that component is loaded properly

describe("TitleBar", () => {
  it("should render the TitleBar component", () => {
    render(<TitleBar />);
    const titleBar = screen.getByTestId("title-bar");
    expect(titleBar).toBeInTheDocument();
  });
});
