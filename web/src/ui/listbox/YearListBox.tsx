"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

type YearListBoxProps = {
  yearList: string[];
  yearCurrent: string;
};

export default function YearListBox({
  yearList,
  yearCurrent,
}: YearListBoxProps) {
  const [selectedYear, setSelectedYear] = useState(yearCurrent);
  const router = useRouter();

  const yearTextColor = [
    "text-lila-700",
    "text-yellow-700",
    "text-green-700",
    "text-red-700",
  ];

  const yearInt = parseInt(yearCurrent);
  const idx = yearInt % 4;
  const yearColor = yearTextColor[idx];

  const handleOnChange = (e: string) => {
    setSelectedYear(e);
    router.push(`/${e}`);
  };

  return (
    <div data-testid="year-list-box-container">
      <Listbox value={selectedYear} onChange={handleOnChange}>
        <Listbox.Button>
          <div className="flex px-2 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className={`${yearColor} pl-2`}>{selectedYear}</span>
            <span>
              <ChevronUpDownIcon
                className="h-6 w-6 mt-1 text-grey-400"
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
            {yearList.map((year) => {
              if (year === yearCurrent) return;

              const yearBGColor = [
                "bg-lila-200",
                "bg-yellow-200",
                "bg-green-200",
                "bg-red-200",
              ];

              const yearInt = parseInt(year);
              const idx = yearInt % 4;
              const yearBg = yearBGColor[idx];

              return (
                <Listbox.Option
                  key={year}
                  value={year}
                  className={`py-1 px-7 text-xl border border-black cursor-pointer ${yearBg}`}
                >
                  {year}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
