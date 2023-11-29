import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { HTMLAttributes } from "react";

export function Header() {
  return (
    <header className="z-10 relative bg-red-500 ribbon">
      <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="flex justify-center items-center gap-12">
          <Link className="flex items-center justify-center gap-4" href="/">
            <IconChristmas className="h-6 w-6 text-white" />
            <span className="">ChristmasAuction.com</span>
          </Link>

          <Link
            className="text-sm font-medium text-white hover:underline underline-offset-4"
            href="/products"
          >
            Find an Auction
          </Link>
        </div>

        <nav className="flex gap-4 sm:gap-6">
          <Avatar>
            <AvatarImage src="/santa.jpeg" alt="santa clause" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
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
