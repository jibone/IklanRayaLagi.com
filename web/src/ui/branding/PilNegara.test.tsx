import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PilNegara } from ".";

// Prompt:
// Write a jest jsdom test for the imported PilNegara component.
// The test test that component is loaded properly
describe("PilNegara", () => {
  it("should render the PilNegara component", () => {
    render(<PilNegara negara="malaysia" />);

    const countryPillComponent = screen.getByTestId("pil-negara-container");

    expect(countryPillComponent).toBeInTheDocument();
  });
});
