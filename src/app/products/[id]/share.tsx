"use client";

import { Button } from "@/components/ui/button";
import { HTMLAttributes, useEffect, useState } from "react";
import { TwitterShareButton } from "react-share";

export function ShareOnTwitter() {
  const [location, setLocation] = useState<string>();

  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  return (
    <TwitterShareButton url={`${location}?r=${Math.random()}`}>
      <Button className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500">
        <IconTwitter className="h-5 w-5" />
        Share Auction
      </Button>
    </TwitterShareButton>
  );
}

function IconTwitter(props: HTMLAttributes<SVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
