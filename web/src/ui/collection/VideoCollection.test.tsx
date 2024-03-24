import type { Iklan } from "@/db/schema/iklan";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { VideoCollection } from ".";

// Prompt:
// Write a jest jsdom test for the imported VideoCollection component.
// The test test that component is loaded properly

describe("VideoCollection", () => {
  it("should render the VideoCollection component", () => {
    const mockedProps = {
      videoCollection: [
        {
          id: "XXXXXXXXX",
          title: "testing title je",
          year: "2000",
          country: "indonesia",
          organization: "The Jiboneus",
          slug: "this_is_slug",
        } as Iklan,
      ] as Iklan[],
      pill: "year" as "year" | "country",
    };

    render(
      <VideoCollection
        videoCollection={mockedProps.videoCollection}
        pill={mockedProps.pill}
      />,
    );

    const videoCollectionComponent = screen.getByTestId(
      "video-collection-container",
    );

    expect(videoCollectionComponent).toBeInTheDocument();
  });
});
