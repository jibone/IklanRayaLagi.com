import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BilikMediaPage } from ".";
import { CompileMDXResult } from "next-mdx-remote/rsc";

describe("BilikMedia", () => {
  it("should render the BilikMedia component", () => {
    const mockedContent: CompileMDXResult<{ date: string }> = {
      frontmatter: {
        date: "2024-03-02",
      },
      content: <>testing</>,
    };
    render(<BilikMediaPage content={mockedContent} />);

    const bilikMediaComponent = screen.getByTestId("bilik-media-container");

    expect(bilikMediaComponent).toBeInTheDocument();
  });
});
