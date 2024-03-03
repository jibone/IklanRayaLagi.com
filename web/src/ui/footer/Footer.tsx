import { ColorBox, LogoSmall } from "@/ui/branding";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="flex justify-between bg-green-300 border-t-2 border-black py-4 px-5 md:py-8 md:px-10"
    >
      <div>
        <ColorBox />
      </div>
      <div>
        <LogoSmall />
      </div>
    </footer>
  );
}
