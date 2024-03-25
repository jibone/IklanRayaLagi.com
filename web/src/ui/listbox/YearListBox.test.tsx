import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { YearListBox } from ".";

// Prompt:
// Write a jest jsdom test for the imported YearListBox component.
// The test test that component is loaded properly

const mockedRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: mockedRouterPush,
  })),
}));

describe("YearListBox", () => {
  const mockedProps = {
    yearList: ["2020", "2021", "2022", "2023", "2024"],
    yearCurrent: "2024",
  };

  it("should render the YearListBox component", () => {
    render(
      <YearListBox
        yearList={mockedProps.yearList}
        yearCurrent={mockedProps.yearCurrent}
      />,
    );

    const yearListComponent = screen.getByTestId("year-list-box-container");

    expect(yearListComponent).toBeInTheDocument();
  });

  describe("when different year is selected", () => {
    it("renders the component with the selected year and triggers router push", () => {
      render(
        <YearListBox
          yearList={mockedProps.yearList}
          yearCurrent={mockedProps.yearCurrent}
        />,
      );

      const listBoxComponent = screen.getByRole("button");
      fireEvent.click(listBoxComponent);

      const selectYear = screen.getByText("2022");
      fireEvent.click(selectYear);

      expect(mockedRouterPush).toHaveBeenCalledWith(`/2022`);
    });
  });
});
