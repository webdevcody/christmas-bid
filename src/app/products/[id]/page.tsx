import { getProduct } from "@/data-layer/products";

export default async function Product({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const product = await getProduct(params.id);

  return <div>{product?.name}</div>;
}
