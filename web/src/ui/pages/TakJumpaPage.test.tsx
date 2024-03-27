import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TakJumpaPage } from ".";

describe("TakJumpaPage", () => {
  it("should render the TakJumpaPage component", () => {
    render(<TakJumpaPage />);

    const takJumpaComponent = screen.getByTestId("tak-jumpa-container");

    expect(takJumpaComponent).toBeInTheDocument();
  });
});
