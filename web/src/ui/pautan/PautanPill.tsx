import Link from "next/link";

export default function PautanPill({
  children,
  href,
  targetBlank = false,
}: {
  children: React.ReactNode;
  href: string;
  targetBlank?: boolean;
}) {
  return (
    <Link
      target={targetBlank ? "_blank" : "_self"}
      href={href}
      className="px-3 py-1 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 active:shadow-none"
    >
      {children}
    </Link>
  );
}
