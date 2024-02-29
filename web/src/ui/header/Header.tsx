import { ColorBox, TitleBar } from "@/ui/branding";

export default function Header() {
  return (
    <header
      data-testid="header"
      className="flex justify-between bg-white border-b-4 border-black py-4 px-5 md:py-8 md:px-10"
    >
      <div>
        <TitleBar />
      </div>
      <div>
        <ColorBox />
      </div>
    </header>
  );
}
