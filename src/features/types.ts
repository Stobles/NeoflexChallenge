export type Account = {
  token: string;
};

type Rating = {
  rate: number;
  count: number;
};

export type CartProduct = {
  product: Product;
  quantity: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
};

export type QueryParams = {
  limit?: number;
  sort?: "desc" | "asc";
};
