import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LogoSmall } from ".";

// Prompt:
// Write a jest jsdom test for the imported LogoSmall component.
// The test test that component is loaded properly
describe("LogoSmall", () => {
  it("should render the LogoSmall component", () => {
    render(<LogoSmall />);
    const logoSmall = screen.getByTestId("logo-small");
    expect(logoSmall).toBeInTheDocument();
  });
});
