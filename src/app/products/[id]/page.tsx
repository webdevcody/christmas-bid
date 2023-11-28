import { ItemView } from "@/components/item-view";
import { getProduct } from "@/data-layer/products";
import { redirect } from "next/navigation";

export default async function Product({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    redirect("/");
  }

  return (
    <section className="min-h-screen trees text-gray-600">
      <ItemView item={product} />
    </section>
  );
}
