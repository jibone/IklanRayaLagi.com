import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, cleanup, act } from "@testing-library/react";
import { Player } from ".";

jest.mock("react-player", () => "react-player");

describe("Player", () => {
  afterEach(cleanup);

  describe("when component is loaded", () => {
    it("should render the component", async () => {
      const videoSrc = "link-vidoe-iklan-raya";
      render(<Player videoSrc={videoSrc} />);

      await waitFor(() => {
        const playerComponent = screen.getByTestId("player-component");
        expect(playerComponent).toBeInTheDocument();
      });
    });
  });

  describe("when play pause button is click", () => {
    it("change playing state", async () => {
      const videoSrc = "link-vidoe-iklan-raya";
      render(<Player videoSrc={videoSrc} />);

      await waitFor(() => {
        const playPauseButton = screen.getByTestId("playpause-button");
        expect(playPauseButton).toBeInTheDocument();

        const playIconComponent = screen.getByTestId("play-icon");
        expect(playIconComponent).toBeInTheDocument();

        act(() => {
          playPauseButton.click();
        });

        const pauseIconComponent = screen.getByTestId("pause-icon");
        expect(pauseIconComponent).toBeInTheDocument();
      });

      expect(true).toBe(true);
    });
  });

  // TODO: add test for other states.
});
