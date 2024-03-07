import { ColorBox, LogoSmall } from "@/ui/branding";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-green-300 border-t-2 border-black py-4 px-5 md:py-8 md:px-10"
    >
      <div className="flex justify-between mx-auto max-w-screen-2xl">
        <div>
          <ColorBox />
        </div>
        <div>
          <LogoSmall />
        </div>
      </div>
    </footer>
  );
}
