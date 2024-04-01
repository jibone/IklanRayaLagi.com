"use client";

import type { SenaraiNegara } from "@/db/schema/iklan";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

type CountryListBoxProps = {
  countryList: SenaraiNegara[];
  countryCurrent: SenaraiNegara;
};

export default function CountryListBox({
  countryList,
  countryCurrent,
}: CountryListBoxProps) {
  const [selectedCountry, setSelectedCountry] = useState(countryCurrent);
  const router = useRouter();

  const flagEmoji = {
    malaysia: "🇲🇾 ",
    indonesia: "🇮🇩 ",
    singapura: "🇸🇬 ",
    brunei: "🇧🇳 ",
    others: "🌏 ",
  };

  const handleOnChange = (e: SenaraiNegara) => {
    setSelectedCountry(e);
    router.push(`/${e}`);
  };

  return (
    <div data-testid="country-list-box-container">
      <Listbox value={selectedCountry} onChange={handleOnChange}>
        <Listbox.Button>
          <div className="flex px-2 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none">
            <span className={`pl-2`}>
              {flagEmoji[selectedCountry]}{" "}
              {selectedCountry.replace(/\b\w/g, (char) => char.toUpperCase())}
            </span>
            <span>
              <ChevronUpDownIcon
                className="h-6 w-6 md:mt-1 text-grey-400"
                aria-hidden="true"
              />
            </span>
          </div>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-2 w-fit overflow-auto rounded-2xl bg-white text-base border-black border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none">
            {countryList.map((country) => {
              if (country === countryCurrent) return;

              return (
                <Listbox.Option
                  key={country}
                  value={country}
                  className="py-1 px-7 text-xl border border-black cursor-pointer"
                >
                  {flagEmoji[country]}{" "}
                  {country.replace(/\b\w/g, (char) => char.toUpperCase())}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
