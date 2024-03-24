import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { YearColorPill } from ".";

// prompt:
// Write a jest jsdom test for the imported YearColorPill component.
// The test will test that the component is loaded and that a spesific
// class is there.

describe("YearColorPill", () => {
  it("should render the component with lila bg", () => {
    render(<YearColorPill yearStr="2024" />);

    const yearPillComponent = screen.getByTestId("year-color-pill");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-lila-300");
  });

  it("should render the component with red bg", () => {
    render(<YearColorPill yearStr="2023" />);

    const yearPillComponent = screen.getByTestId("year-color-pill");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-red-300");
  });

  it("should render the component with green bg", () => {
    render(<YearColorPill yearStr="2022" />);

    const yearPillComponent = screen.getByTestId("year-color-pill");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-green-300");
  });

  it("should render the component with yellow bg", () => {
    render(<YearColorPill yearStr="2021" />);

    const yearPillComponent = screen.getByTestId("year-color-pill");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-yellow-300");
  });
});
