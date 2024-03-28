import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LogoKecil } from ".";

// Prompt:
// Write a jest jsdom test for the imported LogoKecil component.
// The test test that component is loaded properly
describe("LogoKecil", () => {
  it("should render the LogoSmall component", () => {
    render(<LogoKecil />);
    const logoSmall = screen.getByTestId("logo-kecil-container");
    expect(logoSmall).toBeInTheDocument();
  });
});
