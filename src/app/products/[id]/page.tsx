import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProduct } from "@/data-layer/products";
import { redirect } from "next/navigation";
import { ProductImage } from "./product-image";

import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";
import { ShareOnTwitter } from "./share";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return {};
  }

  const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),
    openGraph: {
      images: [
        {
          width: 1200,
          height: 627,
          url: getCldOgImageUrl({
            src: "christmas/fxeiuqpvurlntff1pc3i",
            overlays: [
              {
                publicId: product.image,
                position: {
                  gravity: "north_east",
                },
                crop: "fill",
                width: 1000,
                height: 1254,
              },
              {
                width: 2000,
                crop: "fit",
                text: {
                  color: "red",
                  fontFamily: "Lato",
                  fontSize: 150,
                  fontWeight: "black",
                  lineSpacing: 20,
                  text: `Christmas Auctions`,
                },
                position: {
                  x: 550,
                  y: 100,
                  gravity: "north_west",
                },
              },
              {
                width: 2000,
                crop: "fit",
                text: {
                  color: "white",
                  fontFamily: "Lato",
                  fontSize: 150,
                  fontWeight: "black",
                  lineSpacing: 20,
                  text: `Bid now for a\n${product.name}`,
                },
                position: {
                  x: 350,
                  y: 400,
                  gravity: "north_west",
                },
              },
              {
                width: 2000,
                crop: "fit",
                text: {
                  color: "black",
                  fontFamily: "Lato",
                  fontSize: 150,
                  fontWeight: "black",
                  lineSpacing: 20,
                  text: `for $${product.bid}!`,
                },
                position: {
                  x: 430,
                  y: 800,
                  gravity: "north_west",
                },
              },
            ],

            // effects: [
            //   {
            //     background: "rgb:010A44",
            //   },
            //   {
            //     color: "rgb:2A005F",
            //     colorize: "100",
            //   },
            //   {
            //     gradientFade: "symmetric",
            //   },
            // ],
          }),
        },
      ],
    },
  };

  return metadata;
}

export default async function Product({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    redirect("/");
  }

  return (
    <section className="min-h-screen trees text-gray-600">
      <div className="max-w-6xl mx-auto p-6 pt-12">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ProductImage
              alt={product.name}
              className="mb-4"
              height="400"
              src={product.image}
              width="600"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                <p className="text-sm mb-4">by Dyson</p>
              </div>
              <ShareOnTwitter />
            </div>
            <div className="flex items-center mb-2">
              <IconStar className="text-yellow-400" />
              <IconStar className="text-yellow-400" />
              <IconStar className="text-yellow-400" />
              <IconStar className="text-yellow-400" />
              <IconStar className="text-gray-300" />
              <span className="text-sm ml-2">4.2 stars (23 customers)</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Actual Price</p>
                <p className="text-xl font-semibold">${product.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Leading Bid (12 total bids)
                </p>
                <p className="text-xl font-semibold">${product.bid}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">YOUR BID</p>
              <p className="text-4xl font-bold text-red-500">${product.bid}</p>
            </div>
            <Button className="bg-green-500 text-white w-full hover:bg-green-600">
              Place Bid
            </Button>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm"></span>
              <div className="flex items-center">
                <IconClock className="text-gray-500 mr-2" />
                <span className="text-sm">6 h 12 m Time Remaining</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-b">
          <Tabs defaultValue="description">
            <TabsList className="bg-white">
              <TabsTrigger className="hover:bg-blue-100" value="description">
                DESCRIPTION
              </TabsTrigger>
              <TabsTrigger className="hover:bg-blue-100" value="detail">
                DETAIL
              </TabsTrigger>
              <TabsTrigger className="hover:bg-blue-100" value="specifications">
                SPECIFICATIONS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="bg-white p-4 mt-0">
              <p className="mb-4 leading-8">
                Introducing the UltraClean Pro 2000 - your ultimate partner in
                home cleanliness. This sleek and powerful vacuum cleaner is
                designed to effortlessly tackle dirt, dust, and debris, leaving
                your living spaces pristine and refreshed. The UltraClean Pro
                2000 combines cutting-edge technology with user-friendly
                features, making it the ideal choice for modern households.
              </p>
              <p className="mb-4 leading-8">
                Equipped with a high-performance motor, the UltraClean Pro 2000
                delivers superior suction power, ensuring thorough cleaning on
                various surfaces, from carpets to hardwood floors. Its advanced
                filtration system captures even the finest particles, promoting
                a healthier indoor environment for you and your family.
              </p>
              <p className="mb-4 leading-8">
                The ergonomic design of the UltraClean Pro 2000 prioritizes user
                convenience. With a lightweight build and swivel steering,
                maneuvering around furniture and tight spaces becomes a breeze.
                The easy-to-empty dustbin and washable filters make maintenance
                hassle-free, while the cord rewind feature enhances storage
                efficiency.
              </p>
              <p className="mb-4 leading-8">
                Upgrade your cleaning routine with the UltraClean Pro 2000 -
                where power meets convenience for a spotless home.
              </p>
            </TabsContent>
            <TabsContent value="detail" className="bg-white p-4 mt-0">
              <ul className="list-disc leading-8 pl-12">
                <li>
                  Powerful Suction: High-performance motor for efficient dirt
                  and debris removal.
                </li>
                <li>
                  Advanced Filtration: HEPA filtration system captures allergens
                  and fine particles.
                </li>
                <li>
                  Multi-Surface Cleaning: Versatile design for use on carpets,
                  hardwood, and more.
                </li>
                <li>
                  Ergonomic Design: Lightweight build and swivel steering for
                  easy maneuverability.
                </li>
                <li>
                  User-Friendly Maintenance: Easy-to-empty dustbin, washable
                  filters, and cord rewind.
                </li>
                <li>
                  Quiet Operation: Enjoy a quieter cleaning experience without
                  compromising power.
                </li>
                <li>
                  Extended Reach: Extra-long power cord for increased cleaning
                  radius.
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="bg-white p-4 mt-0">
              <ul className="list-disc leading-8 pl-12">
                <li>Motor Power: 1200 Watts</li>
                <li>Filtration System: HEPA Filter</li>
                <li>Dustbin Capacity: 2.5 liters</li>
                <li>Cord Length: 25 feet</li>
                <li>Weight: 15 pounds</li>
                <li>Dimensions: 12 x 15 x 45 inches</li>
                <li>Brushroll Type: Multi-surface, adjustable</li>
                <li>Noise Level: 75 decibels</li>
                <li>
                  Accessories: Crevice tool, dusting brush, upholstery tool
                </li>
                <li>Warranty: 2 years</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconClock(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
