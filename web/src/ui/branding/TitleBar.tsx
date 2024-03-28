"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function TitleBar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setShowMenu(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleRightClick = (event: any) => {
    event.preventDefault();
    setShowMenu(true);
  };

  return (
    <div onContextMenu={handleRightClick}>
      <Link
        href="/"
        data-testid="title-bar"
        className="font-black text-2xl md:text-4xl"
        onContextMenu={handleRightClick}
      >
        <span className="underline decoration-4 decoration-yellow-500">
          <span className="text-yellow-700">I</span>klan{" "}
          <span className="text-green-700">R</span>a
        </span>
        y
        <span className="underline decoration-4 decoration-green-500">
          a <span className="text-red-700">L</span>a
        </span>
        g<span className="underline decoration-4 decoration-red-500">i.</span>
      </Link>
      <div
        data-testid="context-menu-container"
        className={`${showMenu ? "visible" : "hidden"} flex flex-col overflow-clip mt-4 absolute w-96 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
      >
        <Link
          href="/download/logo"
          className="py-3 px-5 border-black border-b hover:bg-lila-400"
        >
          Download Logo <ArrowTopRightOnSquareIcon className="h-4 w-4 inline" />
        </Link>
        <Link
          href="/download/banner"
          className="py-3 px-5 border-black border-b hover:bg-lila-400"
        >
          Download Banner{" "}
          <ArrowTopRightOnSquareIcon className="h-4 w-4 inline" />
        </Link>
        <Link
          href="/press-kit"
          className="py-3 px-5 border-black border-b hover:bg-lila-400"
        >
          Press Kit
        </Link>
        <div className="py-3 px-4 text-sm bg-gray-200">
          Sebarang pertanyaan boleh berhubung terus dengan{" "}
          <Link
            href="https://twitter.com/jibone"
            className="text-lila-800 hover:text-lila-900 underline decoration-black"
          >
            @jibone
          </Link>{" "}
          di platform X (dulunya Twitter)
        </div>
      </div>
    </div>
  );
}
