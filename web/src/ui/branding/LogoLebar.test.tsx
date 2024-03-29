import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LogoLebar } from ".";

// Prompt:
// Write a jest jsdom test for the imported LogoLebar component.
// The test test that component is loaded properly
describe("LogoLebar", () => {
  it("should render the TitleBar component", () => {
    render(<LogoLebar />);
    const titleBar = screen.getByTestId("logo-lebar-container");
    expect(titleBar).toBeInTheDocument();
  });

  describe("When right-click title bar", () => {
    it("should show the menu", () => {
      render(<LogoLebar />);

      waitFor(() => {
        const titleBar = screen.getByTestId("logo-lebar-container");
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
