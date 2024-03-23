export type Account = {
  token: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type QueryParams = {
  limit: number;
  sort: "desc" | "asc";
};
