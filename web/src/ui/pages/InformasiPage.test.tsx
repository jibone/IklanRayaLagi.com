import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { InformasiPage } from ".";

describe("InformasiPage", () => {
  it("should render the InformasiPage component", () => {
    const sampleData = {
      totalIklan: "200",
      totalIklanMalaysia: "100",
      totalIklanIndonesia: "40",
      totalIklanSingapura: "10",
      tahunTerawal: "1999",
      tahunTerlatest: "2022",
    };
    render(<InformasiPage {...sampleData} />);

    const informasiPageComponent = screen.getByTestId(
      "informasi-page-container",
    );

    expect(informasiPageComponent).toBeInTheDocument();
  });
});
