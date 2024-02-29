import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PageContainer } from ".";

// Prompt:
// Write a jest jsdom test for the imported PageContainer component.
// The test test that component is loaded properly

describe("PageContainer", () => {
  it("should render the PageContainer component", () => {
    render(
      <PageContainer>
        <div data-testid="page-container-child">This is a child</div>
      </PageContainer>,
    );

    const pageContainer = screen.getByTestId("page-container");
    const pageContainerChild = screen.getByTestId("page-container-child");
    const header = screen.getByTestId("header");
    const footer = screen.getByTestId("footer");

    expect(pageContainer).toBeInTheDocument();
    expect(pageContainerChild).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
