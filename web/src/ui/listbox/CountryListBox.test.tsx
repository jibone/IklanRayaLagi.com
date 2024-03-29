import type { SenaraiNegara } from "@/db/schema/iklan";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CountryListBox from "./CountryListBox";

// Prompt:
// Write a jest jsdom test for the imported YearListBox component.
// The test test that component is loaded properly

const mockedRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: mockedRouterPush,
  })),
}));

describe("CountryListBox", () => {
  const mockedProps = {
    countryList: ["malaysia", "indonesia", "singapore"] as SenaraiNegara[],
    countryCurrent: "malaysia" as SenaraiNegara,
  };

  it("renders the component with the list of countries", () => {
    render(
      <CountryListBox
        countryCurrent="malaysia"
        countryList={mockedProps.countryList}
      />,
    );

    const countryListBoxContainer = screen.getByTestId(
      "country-list-box-container",
    );

    expect(countryListBoxContainer).toBeInTheDocument();
  });

  describe("when different country is selected", () => {
    it("renders the component with the selected country", () => {
      render(
        <CountryListBox
          countryCurrent="malaysia"
          countryList={mockedProps.countryList}
        />,
      );

      const listBoxCountry = screen.getByRole("button");
      fireEvent.click(listBoxCountry);

      const selectCountry = screen.queryByText(/indonesia/i);
      if (selectCountry !== null) fireEvent.click(selectCountry);

      expect(mockedRouterPush).toHaveBeenCalledWith(`/indonesia`);
    });
  });
});
