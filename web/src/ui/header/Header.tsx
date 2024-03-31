import Link from "next/link";
import { LogoLebar } from "@/ui/branding";

export default function Header({ page }: { page: string }) {
  const link = {
    url: "/informasi",
    label: "Informasi",
  };

  if (page === "informasi") {
    link.url = "/";
    link.label = "Muka Depan";
  }

  return (
    <header
      data-testid="header"
      className="bg-white border-b-4 border-black py-4 px-5 md:py-8 md:px-10"
    >
      <div className="flex justify-between mx-auto max-w-screen-2xl">
        <div>
          <LogoLebar />
        </div>
        <div>
          <Link
            href={link.url}
            className="py-2 px-4 bg-green-300 border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            {link.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
