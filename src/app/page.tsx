import { Button } from "@/components/ui/button";
import { SnowfallWrapper } from "./snowfall-wrapper";
import Image from "next/image";
import { ProductCardList } from "./product-card-list";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 text-white text-center">
          <Image
            alt="Christmas Hero Image"
            className="absolute inset-0 object-cover w-full h-full"
            height="720"
            src="/hero.png"
            width="1280"
          />
          <div className="container px-4 md:px-6 relative mx-auto flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Christmas Bidding
              <br /> Made Easy
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl lg:text-3xl">
              Start bidding on great Christmas products!
            </p>
            <Link href="/products">
              <Button variant={"ghost"}>Start Bidding</Button>
            </Link>
          </div>
        </section>

        <section className="z-10 relative w-full trees pb-24 pt-12">
          <div className="wave" />
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-5xl text-gray-600 mb-12 font-bold text-center">
              Recent Auctions
            </h2>
            <ProductCardList />
          </div>
        </section>
      </main>

      <SnowfallWrapper />
    </div>
  );
}
