"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function LogoLebar() {
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
        data-testid="logo-lebar-container"
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
        <a
          href="/download/logo"
          download={"Iklan_Raya_Lagi_logo"}
          className="py-3 px-5 border-black border-b hover:bg-lila-400"
        >
          Muat turun logo{" "}
          <ArrowTopRightOnSquareIcon className="h-4 w-4 inline" />
        </a>
        <Link
          href="/informasi"
          className="py-3 px-5 border-black border-b hover:bg-lila-400"
        >
          Halaman Informasi
        </Link>
        <Link
          href="/bilik_media"
          className="py-3 px-5 border-black border-b hover:bg-lila-400"
        >
          Bilik Media (Press Release)
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
