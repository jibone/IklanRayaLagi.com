import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AkanDatang } from ".";

describe("AkanDatang", () => {
  it("renders the page component", () => {
    render(<AkanDatang />);
    const heading = screen.getByText("Akan datang");
    expect(heading).toBeInTheDocument();
  });
});
