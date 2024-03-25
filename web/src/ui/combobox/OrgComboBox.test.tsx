import "@testing-library/jest-dom";
import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
  cleanup,
} from "@testing-library/react";
import { OrgComboBox } from ".";

// Prompt:
// Write a jest jsdom test for the imported OrgComboBox component.
// The test test that component is loaded properly

const mockedRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: mockedRouterPush,
    replace: jest.fn(),
    pathname: "/mock-path",
    query: {},
    asPath: "/mock-path",
  })),
}));

describe("OrgComboBox", () => {
  afterEach(cleanup);

  const mockedProps = {
    org: {
      slug: "this_is_slug_1",
      name: "this is test 1",
    },
    orgs: [
      {
        slug: "this_is_slug_1",
        name: "this is test 1",
      },
      {
        slug: "this_is_slug_2",
        name: "this is test 2",
      },
    ],
  };

  it("should render the component", () => {
    render(<OrgComboBox org={mockedProps.org} orgs={mockedProps.orgs} />);

    const orgComboBoxComponent = screen.getByTestId("org-combobox-container");

    expect(orgComboBoxComponent).toBeInTheDocument();
  });

  describe("when input component is on focus", () => {
    it("should trigger a router push", async () => {
      render(<OrgComboBox org={mockedProps.org} orgs={mockedProps.orgs} />);

      const comboboxInputComponent = screen.getByTestId(
        "combobox-input-component",
      );

      waitFor(() => {
        const button = screen.getByRole("button");
        fireEvent.click(button);
      });

      waitFor(() => {
        const selectOrg = screen.getByText("this is test 2");
        fireEvent.click(selectOrg);
      });

      waitFor(() => {
        const container = screen.getByTestId("org-combobox-container");
        expect(container).toHaveTextContent("this is test 2");
        expect(mockedRouterPush).toHaveBeenCalledWith(`/this_is_slug_2`);
      });
    });
  });
});
