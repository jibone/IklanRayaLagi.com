import type { OrgOptions } from "@/ui/combobox/OrgComboBox";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { OrganisasiPage } from ".";

const mockedRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: mockedRouterPush,
  })),
}));

describe("OrganisasiPage", () => {
  it("should render the Organisasi page", () => {
    const mockedProps = {
      organisasi: {
        slug: "this_is_slug_1",
        name: "this is test 1",
      } as OrgOptions,
      senaraiOrg: [
        {
          slug: "this_is_slug_1",
          name: "this is test 1",
        },
      ],
      koleksiIklan: [],
    };

    render(<OrganisasiPage {...mockedProps} />);

    const organisasiPageContainer = screen.getByTestId(
      "organisasi-page-container",
    );
    expect(organisasiPageContainer).toBeInTheDocument();
  });
});
