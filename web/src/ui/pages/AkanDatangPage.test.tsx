import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AkanDatangPage } from ".";

describe("AkanDatangPage", () => {
  it("should render the AkanDatangPage component", () => {
    render(<AkanDatangPage />);
    const heading = screen.getByText("Akan datang");
    expect(heading).toBeInTheDocument();
  });
});
