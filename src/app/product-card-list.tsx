import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product, getProducts } from "@/data-layer/products";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";

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

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="rounded bg-white p-4 shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <Image
          alt={product.name}
          className="w-full h-48 object-cover"
          height="200"
          src="/vacuum2.png"
          width="200"
        />
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">Current Bid: ${product.price}</p>
        <Link href={`/products/${product.id}`}>
          <Button className="bg-green-500 text-white">Bid Now</Button>
        </Link>
      </div>
    </Card>
  );
}
