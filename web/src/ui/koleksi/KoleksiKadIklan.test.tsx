import type { Iklan } from "@/db/schema/iklan";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { KoleksiKadIklan } from ".";

// Prompt:
// Write a jest jsdom test for the imported koleksiIklan component.
// The test test that component is loaded properly

describe("KoleksiKadIklan", () => {
  it("should render the KoleksiKadIklan component", () => {
    const mockedProps = {
      koleksiIklan: [
        {
          id: "XXX",
          title: "testing title je",
          year: "2000",
          country: "indonesia",
          organization: "The Jiboneus",
          slug: "this_is_slug",
        } as Iklan,
      ] as Iklan[],
      pill: "year" as "year" | "country",
    };

    render(<KoleksiKadIklan koleksiIklan={mockedProps.koleksiIklan} />);

    const videoCollectionComponent = screen.getByTestId(
      "video-collection-container",
    );

    expect(videoCollectionComponent).toBeInTheDocument();
  });
});
