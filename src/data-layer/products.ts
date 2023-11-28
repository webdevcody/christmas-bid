export type Product = {
  name: string;
  price: string;
  id: string;
  image: string;
  bid: string;
};

const products = [
  {
    id: "1",
    price: "199.99",
    bid: "123.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "2",
    price: "199.99",
    bid: "123.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "3",
    price: "199.99",
    bid: "123.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "4",
    price: "199.99",
    bid: "123.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "5",
    price: "199.99",
    bid: "123.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}
