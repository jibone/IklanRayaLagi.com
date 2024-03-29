import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TahunPage } from ".";

const mockedRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: mockedRouterPush,
  })),
}));

describe("TahunPage", () => {
  it("should render the TahunPage component", () => {
    const mockedProps = {
      tahun: "2024",
      senaraiTahun: ["2024", "2023", "2022"],
      koleksiIklan: [],
    };
    render(<TahunPage {...mockedProps} />);

    const tahunPageComponent = screen.getByTestId("tahun-page-container");
    expect(tahunPageComponent).toBeInTheDocument();
  });
});
