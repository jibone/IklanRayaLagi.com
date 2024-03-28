import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TitleBar } from ".";

// Prompt:
// Write a jest jsdom test for the imported TitleBar component.
// The test test that component is loaded properly
describe("TitleBar", () => {
  it("should render the TitleBar component", () => {
    render(<TitleBar />);
    const titleBar = screen.getByTestId("title-bar");
    expect(titleBar).toBeInTheDocument();
  });

  describe("When right-click title bar", () => {
    it("should show the menu", () => {
      render(<TitleBar />);

      waitFor(() => {
        const titleBar = screen.getByTestId("title-bar");
        fireEvent.contextMenu(titleBar);
      });

      waitFor(() => {
        const contextMenuContainer = screen.getByTestId(
          "context-menu-container",
        );
        expect(contextMenuContainer).toBeVisible();
      });

      waitFor(() => {
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        window.dispatchEvent(clickEvent);

        const contextMenuContainer = screen.getByTestId(
          "context-menu-container",
        );

        expect(contextMenuContainer).not.toBeVisible();
      });
    });
  });
});
