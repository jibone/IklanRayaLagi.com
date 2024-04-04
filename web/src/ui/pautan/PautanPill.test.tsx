import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PautanPill } from ".";

describe("PautanPill", () => {
  it("should render the PautanPill component", () => {
    render(<PautanPill href="https://jiboneus.com">Jiboneus.com</PautanPill>);

    const linkComponent = screen.getByRole("link");

    expect(linkComponent).toBeInTheDocument();
  });
});
