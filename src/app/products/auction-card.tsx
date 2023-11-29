"use client";

import { Product } from "@/data-layer/products";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export function AuctionCard({ product }: { product: Product }) {
  return (
    <Card key={product.id} className="w-full bg-white">
      <CardHeader>
        <div className="relative">
          <CldImage
            alt={product.name}
            className="w-full h-auto"
            height="150"
            src={product.image}
            width="150"
          />
          <IconHeart className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-bold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-semibold mb-4">${product.price}</p>
        <div className="flex items-center mb-4">
          <IconStar className="text-yellow-400" />
          <IconStar className="text-yellow-400" />
          <IconStar className="text-yellow-400" />
          <IconStar className="text-yellow-400" />
          <IconStar className="text-yellow-400" />
          <span className="text-xs text-gray-500 ml-2">4.3 stars</span>
        </div>
        <Link href={`/products/${product.id}`}>
          <Button>View Auction</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function IconStar(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconHeart(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
