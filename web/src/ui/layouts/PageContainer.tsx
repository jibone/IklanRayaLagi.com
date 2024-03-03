import { ReactNode } from "react";
import { Header } from "@/ui/header";
import { Footer } from "@/ui/footer";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div
      data-testid="page-container"
      className="flex flex-col min-h-screen bg-yellow-500"
    >
      <div className="flex-1">
        <Header />
        {children}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
