export type Product = {
  name: string;
  price: string;
  id: string;
  image: string;
};

const products = [
  {
    id: "1",
    price: "1.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "2",
    price: "1.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "3",
    price: "1.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "4",
    price: "1.99",
    name: "vacuum",
    image: "vacuum2.png",
  },
  {
    id: "5",
    price: "1.99",
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
