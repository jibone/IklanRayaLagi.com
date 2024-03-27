import { PageContainer } from "@/ui/layouts";
import { InformasiPage } from "@/ui/pages";
import { IklanModel } from "@/models";

export default async function Informasi() {
  const statsReport = await IklanModel.getStats();

  return (
    <PageContainer>
      <InformasiPage {...statsReport} />
    </PageContainer>
  );
}
