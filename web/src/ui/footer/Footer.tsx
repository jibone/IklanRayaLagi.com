import Link from "next/link";
import { KotakKaler } from "@/ui/branding";

export default function Footer({ page }: { page: string }) {
  const link = {
    url: "/informasi",
    label: "Informasi",
  };

  if (page === "informasi") {
    link.url = "/";
    link.label = "Kembali ke Muka Depan";
  }

  return (
    <footer
      data-testid="footer"
      className="mt-10 bg-green-300 border-t-2 border-black py-4 px-5 md:py-8 md:px-10"
    >
      <div className="flex justify-between mx-auto max-w-screen-2xl">
        <div>
          <Link
            href={link.url}
            className="py-2 px-4 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            {link.label}
          </Link>
        </div>
        <div>
          <KotakKaler />
        </div>
      </div>
    </footer>
  );
}
