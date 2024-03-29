import type { Iklan } from "@/db/schema/iklan";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { IklanRayePage } from ".";

// Prompt: Write a jest to test the imported component VideoPage loads

jest.mock("react-player", () => "react-player");

describe("VideoPage", () => {
  afterEach(cleanup);

  it("should render the VideoPage component", () => {
    const mockedProps = {
      iklanRaye: {
        id: "XXXXXXX",
        title: "Test title je...",
        year: "2000",
        country: "malaysia",
        organization: "The Jiboneus",
        slug: "this-is-the-slug",
      } as Iklan,
      koleksiIklan: [] as Iklan[],
    };

    render(<IklanRayePage {...mockedProps} />);
    const videoPageContainer = screen.getByTestId("video-page-container");

    expect(videoPageContainer).toBeInTheDocument();
  });
});
