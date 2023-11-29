import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/data-layer/products";
import { unstable_noStore } from "next/cache";

export async function ProductCardList() {
  unstable_noStore();
  const products = await getProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
