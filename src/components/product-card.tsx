"use client";

import { Card } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Product } from "@/data-layer/products";
import { CldImage } from "next-cloudinary";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="text-gray-500 rounded bg-white p-4 shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <CldImage
          alt={product.name}
          className="w-full h-48 object-cover"
          height="200"
          src={product.image}
          width="200"
        />
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm ">Current Bid: ${product.price}</p>
        <Link href={`/products/${product.id}`}>
          <Button className="bg-green-500 text-white">Bid Now</Button>
        </Link>
      </div>
    </Card>
  );
}
