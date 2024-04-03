import { PageContainer } from "@/ui/layouts";

export default function MukaDepanLayout({
  children,
  carian,
  iklanTahunIni,
  iklanTahunLepasan,
}: {
  children: React.ReactNode;
  carian: React.ReactNode;
  iklanTahunIni: React.ReactNode;
  iklanTahunLepasan: React.ReactNode;
}) {
  return (
    <PageContainer page="muka_depan">
      <div
        data-testid="muka-depan-page-container"
        className="mx-auto max-w-screen-2xl py-4 px-4"
      >
        {carian}
        {iklanTahunIni}
        {iklanTahunLepasan}
        {children}
      </div>
    </PageContainer>
  );
}
