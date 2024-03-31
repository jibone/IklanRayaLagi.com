import type { Iklan } from "@/db/schema/iklan";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MukaDepanPage } from ".";

describe("MukaDepanPage", () => {
  it("should render the muka depan component", () => {
    const mockedIklan = {
      id: "XXX",
      title: "testing title je",
      year: "2000",
      country: "indonesia",
      organization: "The Jiboneus",
      slug: "this_is_slug",
    } as Iklan;

    const mockedProps = {
      senaraiTahunan: [
        [mockedIklan],
        [mockedIklan],
        [mockedIklan],
        [mockedIklan],
        [mockedIklan],
      ],
      senaraiTahunLepas: [mockedIklan],
      semuaIklan: [mockedIklan],
    };

    render(<MukaDepanPage {...mockedProps} />);

    const mukaDepanPageComponent = screen.getByTestId(
      "muka-depan-page-container",
    );

    expect(mukaDepanPageComponent).toBeInTheDocument();
  });

  describe("when searching for iklan", () => {
    it("should render the result component", () => {
      const mockedIklan = {
        id: "XXX",
        title: "testing title je",
        year: "2000",
        country: "indonesia",
        organization: "The Jiboneus",
        slug: "this_is_slug",
      } as Iklan;

      const mockedProps = {
        senaraiTahunan: [
          [mockedIklan],
          [mockedIklan],
          [mockedIklan],
          [mockedIklan],
          [mockedIklan],
        ],
        senaraiTahunLepas: [mockedIklan],
        semuaIklan: [mockedIklan],
      };

      render(<MukaDepanPage {...mockedProps} />);

      const carianInputComponent = screen.getByTestId("carian-input-container");

      waitFor(() => {
        fireEvent.change(carianInputComponent, {
          target: { value: "testing" },
        });

        const resultCarianComponent = screen.getByTestId(
          "result-carian-container",
        );

        expect(resultCarianComponent).toBeVisible();
      });

      waitFor(() => {
        fireEvent.change(carianInputComponent, {
          target: { value: "" },
        });

        const resultCarianComponent = screen.getByTestId(
          "result-carian-container",
        );

        expect(resultCarianComponent).not.toBeVisible();
      });
    });
  });
});
