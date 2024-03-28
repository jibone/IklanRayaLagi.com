import { KotakKaler, LogoLebar } from "@/ui/branding";

export default function Header() {
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
          <KotakKaler />
        </div>
      </div>
    </header>
  );
}
