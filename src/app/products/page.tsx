import { getProducts } from "@/data-layer/products";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AuctionCard } from "./auction-card";

export default async function Product() {
  const products = await getProducts();

  return (
    <div className="trees text-gray-600">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <div className="mb-4">
                <input
                  className="mr-2"
                  id="price-range"
                  max="1000"
                  min="0"
                  type="range"
                />
                <label htmlFor="price-range">$0 - $1000</label>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Total Bids</h3>
              <div className="mb-4">
                <input
                  className="mr-2"
                  id="total-bids"
                  max="100"
                  min="0"
                  type="range"
                />
                <label htmlFor="total-bids">0 - 100</label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Electronics</h3>
              <div className="mb-4">
                <input className="mr-2" id="tv" type="checkbox" />
                <label htmlFor="tv">TV</label>
              </div>
              <div className="mb-4">
                <input className="mr-2" id="laptop" type="checkbox" />
                <label htmlFor="laptop">Laptop</label>
              </div>
              <div className="mb-4">
                <input className="mr-2" id="smartphone" type="checkbox" />
                <label htmlFor="smartphone">Smartphone</label>
              </div>
              <div className="mb-4">
                <input className="mr-2" id="tablet" type="checkbox" />
                <label htmlFor="tablet">Tablet</label>
              </div>
              <div className="mb-4">
                <input className="mr-2" id="smartwatch" type="checkbox" />
                <label htmlFor="smartwatch">Smartwatch</label>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Clothing</h3>
              <div className="mb-4">
                <input className="mr-2" id="men-clothing" type="checkbox" />
                <label htmlFor="men-clothing">Men{"'"}s Clothing</label>
              </div>
              <div className="mb-4">
                <input className="mr-2" id="women-clothing" type="checkbox" />
                <label htmlFor="women-clothing">Women{"'"}s Clothing</label>
              </div>
            </div>
          </aside>
          <main className="w-full lg:w-3/4 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-md font-semibold">
                {products.length} Results
              </span>
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="bg-white border-gray-400" id="sort">
                    <SelectValue placeholder="Best Sellers" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="bg-white text-gray-600"
                  >
                    <SelectItem value="best-sellers">Best Sellers</SelectItem>
                    <SelectItem value="price-low-high">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high-low">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <AuctionCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
