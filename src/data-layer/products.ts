export type Product = {
  name: string;
  price: string;
  id: string;
  image: string;
  bid: string;
  description: string;
};

const products: Product[] = [
  {
    id: "1",
    price: "199.99",
    bid: "123.99",
    name: "Vacuum",
    image: "christmas/jrplcwsp4nfdavrhsczd",
    description: "A powerful vacuum cleaner for efficient cleaning.",
  },
  {
    id: "2",
    price: "29.99",
    bid: "9.00",
    name: "Kids Bow & Arrow Kit",
    image: "christmas/akunm6rggel24iiazvm3",
    description: "A fun bow and arrow kit for kids to enjoy outdoor play.",
  },
  {
    id: "3",
    price: "79.99",
    bid: "32.99",
    name: "Lego Sports Car",
    image: "christmas/ubminn5nmbtuqrewfxhs",
    description: "Build your own sports car with this Lego set.",
  },
  {
    id: "4",
    price: "49.99",
    bid: "39.99",
    name: "Coffee Brewer",
    image: "christmas/flszit53oysuhcjsbkte",
    description: "An easy-to-use coffee brewer for your daily caffeine fix.",
  },
  {
    id: "5",
    price: "99.99",
    bid: "43.99",
    name: "Espresso Maker",
    image: "christmas/xwrjm7zb7pu7c0dcpws2",
    description: "Brew delicious espresso at home with this espresso maker.",
  },
  {
    id: "6",
    price: "399.99",
    bid: "232.99",
    name: "Electric Guitar",
    image: "christmas/bnhn7yythz0garfweook",
    description:
      "Rock out with this electric guitar, perfect for beginners and pros alike.",
  },
  {
    id: "7",
    price: "499.99",
    bid: "329.99",
    name: "Awesome Laptop",
    image: "christmas/oikxwurdn1qfyrlhsy62",
    description: "A powerful laptop with top-notch features for work and play.",
  },
  {
    id: "8",
    price: "9.99",
    bid: "3.99",
    name: "Charger Cord",
    image: "christmas/qsbbggp1rp0oqvi3kqvz",
    description: "A durable charger cord for your electronic devices.",
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}
