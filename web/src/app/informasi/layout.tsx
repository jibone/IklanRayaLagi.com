import { PageContainer } from "@/ui/layouts";
import React from "react";

export default function InformasiLayout({
  children,
  stats,
  hubungi,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  hubungi: React.ReactNode;
}) {
  return (
    <PageContainer page="informasi">
      {children}
      {stats}
      {hubungi}
    </PageContainer>
  );
}
