import type { Iklan } from "@/db/schema/iklan";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { KoleksiKadIklanTahunan } from ".";

jest.mock("react-superellipse", () => "react-superellipse");

describe("KoleksiKadIklan", () => {
  it("should render the KoleksiKadIklanTahunan component", () => {
    const mockedIklan = {
      id: "XXX",
      title: "testing title je",
      year: "2000",
      country: "indonesia",
      organization: "The Jiboneus",
      slug: "this_is_slug",
    } as Iklan;

    const mockedProps = {
      label: "Test je ni",
      labelPautan: "Label pautan",
      pautan: "2024",
      koleksiIklan: [mockedIklan],
    };

    render(<KoleksiKadIklanTahunan {...mockedProps} />);

    const koleksiKadIklanTahunanContainer = screen.getByTestId(
      "koleksi-kad-iklan-tahunan-container",
    );

    expect(koleksiKadIklanTahunanContainer).toBeInTheDocument();
  });
});
