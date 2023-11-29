"use client";

import { CldImage } from "next-cloudinary";

export function ProductImage(props: any) {
  return <CldImage {...props} />;
}
