import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChangelogPage } from ".";
import { CompileMDXResult } from "next-mdx-remote/rsc";
import { ChangelogFrontmatter } from "./ChangelogPage";

// Prompt:
// Write a jest jsdom test for the imported Changelog component.
// The test test that component is loaded properly
describe("ChangelogPage", () => {
  it("should render the ChangelogPage component", () => {
    const mockedContents: CompileMDXResult<ChangelogFrontmatter>[] = [
      {
        frontmatter: {
          date: "2024-03-04",
          version: "v0.1.0",
        },
        content: <>testing</>,
      },
    ];
    render(<ChangelogPage contents={mockedContents} />);

    const changelogPage = screen.getByTestId("changelog-page");

    expect(changelogPage).toBeInTheDocument();
  });
});
