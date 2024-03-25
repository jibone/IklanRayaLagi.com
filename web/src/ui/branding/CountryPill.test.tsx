import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CountryPill } from ".";

// Prompt:
// Write a jest jsdom test for the imported CountryPill component.
// The test test that component is loaded properly
describe("CountryPill", () => {
  it("should render the CountryPill component", () => {
    render(<CountryPill country="malaysia" />);

    const countryPillComponent = screen.getByTestId("country-pill-container");

    expect(countryPillComponent).toBeInTheDocument();
  });
});
