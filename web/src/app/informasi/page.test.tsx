import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Informasi from "./page";
import { IklanModel } from "@/models";

describe("Informasi", () => {
  jest.spyOn(IklanModel, "getStats").mockImplementation(async () => ({
    totalIklan: "200",
    totalIklanMalaysia: "100",
    totalIklanIndonesia: "40",
    totalIklanSingapura: "10",
    tahunTerawal: "1999",
    tahunTerlatest: "2001",
  }));

  it("renders the Informasi page", async () => {
    render(Informasi());

    const informasiPageComponent = screen.getByTestId(
      "informasi-page-container",
    );

    expect(informasiPageComponent).toBeInTheDocument();
  });
});
