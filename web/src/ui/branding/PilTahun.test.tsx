import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PilTahun } from ".";

// prompt:
// Write a jest jsdom test for the imported PilTahun component.
// The test will test that the component is loaded and that a spesific
// class is there.

describe("PilTahun", () => {
  it("should render the component with lila bg", () => {
    render(<PilTahun tahunStr="2024" />);

    const yearPillComponent = screen.getByTestId("pil-tahun-container");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-lila-300");
  });

  it("should render the component with red bg", () => {
    render(<PilTahun tahunStr="2023" />);

    const yearPillComponent = screen.getByTestId("pil-tahun-container");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-red-300");
  });

  it("should render the component with green bg", () => {
    render(<PilTahun tahunStr="2022" />);

    const yearPillComponent = screen.getByTestId("pil-tahun-container");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-green-300");
  });

  it("should render the component with yellow bg", () => {
    render(<PilTahun tahunStr="2021" />);

    const yearPillComponent = screen.getByTestId("pil-tahun-container");

    expect(yearPillComponent).toBeInTheDocument();
    expect(yearPillComponent).toHaveClass("bg-yellow-300");
  });
});
