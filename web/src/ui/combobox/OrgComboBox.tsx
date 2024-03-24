"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

export type OrgOptions = {
  slug: string;
  name: string;
};

type OrgComboBoxProps = {
  org: OrgOptions;
  orgs: OrgOptions[];
};

export default function OrgComboBox({ org, orgs }: OrgComboBoxProps) {
  const [selected, setSelected] = useState<OrgOptions | null>(org);
  const [remember, setRemember] = useState<OrgOptions | null>(org);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredOrgs =
    query === ""
      ? orgs
      : orgs.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  const handleOnChange = (e: OrgOptions) => {
    setSelected(e);
    router.push(`/${e.slug}`);
  };

  const handleOnFocus = () => {
    setRemember(selected);
    setSelected(null);
  };

  const handleOnBlur = () => {
    setSelected(remember);
  };

  return (
    <div data-testid="org-combobox-container">
      <Combobox value={selected} onChange={handleOnChange} nullable>
        <div className="relative mt-1">
          <div className="relative w-fit cursor-default overflow-auto bg-white text-left rounded-full border-2 border-black focus:outline-none">
            <Combobox.Input
              data-testid="combobox-input-component"
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none"
              displayValue={(org: any) => org?.name}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-96 z-50 overflow-auto rounded-md bg-white border-2 border-black text-base focus:outline-none">
              {filteredOrgs.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Tak jumpa apa-apa.
                </div>
              ) : (
                filteredOrgs.map((org) => (
                  <Combobox.Option
                    key={org.slug}
                    className={({ active }) =>
                      `px-2 py-1 ${active ? "bg-lila-600 text-white" : "text-black"}`
                    }
                    value={org}
                  >
                    {org.name}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
