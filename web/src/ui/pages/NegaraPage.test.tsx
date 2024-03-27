import type { CountryList } from "@/db/schema/iklan";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NegaraPage } from ".";

const mockedRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: mockedRouterPush,
  })),
}));

describe("NegaraPage", () => {
  it("should render the NegaraPage component", () => {
    const mockedProps = {
      negara: "malaysia" as CountryList,
      senaraiNegara: ["malaysia", "indonesia", "singapore"] as CountryList[],
      koleksiIklan: [],
    };

    render(<NegaraPage {...mockedProps} />);

    const negaraPageContainer = screen.getByTestId("negara-page-container");
    expect(negaraPageContainer).toBeInTheDocument();
  });
});
