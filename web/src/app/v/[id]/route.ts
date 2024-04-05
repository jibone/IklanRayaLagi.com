import { IklanModel } from "@/models";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const result = await IklanModel.getIklanId(id);

  if (result === undefined) {
    redirect("/tak-jumpa");
  }

  const { slug } = result;
  redirect(`/${slug}`);
}
