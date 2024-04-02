import Link from "next/link";

export default function Pautan({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="font-semibold underline underline-offset-4 text-lila-800 decoration-black decoration-2"
    >
      {children}
    </Link>
  );
}
