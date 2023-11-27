import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SnowfallWrapper } from "./snowfall-wrapper";
import Image from "next/image";
import { ProductCardList } from "./product-card-list";
import { HTMLAttributes } from "react";

export function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-10 relative bg-red-500">
        <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <IconChristmas className="h-6 w-6 text-white" />
            <span className="sr-only">Christmas Bidding</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium text-white hover:underline underline-offset-4"
              href="#"
            >
              Find Offers
            </Link>

            <Link
              className="text-sm font-medium text-white hover:underline underline-offset-4"
              href="#"
            >
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 text-white text-center">
          <Image
            alt="Christmas Hero Image"
            className="absolute inset-0 object-cover w-full h-full"
            height="720"
            src="/hero.png"
            width="1280"
          />
          <div className="container px-4 md:px-6 relative mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Christmas Bidding
              <br /> Made Easy
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl lg:text-3xl">
              Start bidding on great Christmas products!
            </p>
            <Button className="mt-4 bg-white text-green-500">
              Start Bidding
            </Button>
          </div>
        </section>

        <section className="z-10 relative w-full trees pb-24 pt-12">
          <div className="wave" />
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-5xl text-gray-600 mb-12 font-bold text-center">
              Recent Offers
            </h2>
            <ProductCardList />
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © Christmas Bidding. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms & Conditions
          </Link>
        </nav>
      </footer>
      <SnowfallWrapper />
    </div>
  );
}

function IconChristmas(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" />
      <path d="M17.75 7 15 2.1" />
      <path d="M10.9 4.8 13 9" />
      <path d="m7.9 9.7 2 4.4" />
      <path d="M4.9 14.7 7 18.9" />
    </svg>
  );
}
