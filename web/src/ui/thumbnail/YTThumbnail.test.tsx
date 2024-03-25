import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { YTThumbnail } from ".";

// Prompt:
// Write a jest test for the imported component YTThumbnail,
// where the test checks that the Image component receive the right props
describe("YTThumbnail", () => {
  it("should render an image with the correct props", () => {
    const vidId = "9bZkp7q19f0";
    const altText = "PSY - GANGNAM STYLE(강남스타일) M/V";

    render(<YTThumbnail vidId={vidId} altText={altText} />);

    const image = screen.getByRole("img");
    const expectedSrc = `/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2F${vidId}%2F0.jpg&w=1080&q=75`;

    expect(image).toHaveAttribute("src", expectedSrc);
    expect(image).toHaveAttribute("alt", altText);
  });
});
