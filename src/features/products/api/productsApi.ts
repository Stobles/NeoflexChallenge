import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, QueryParams } from "@/features/types";

const generateQueryStr = (baseString: string, query: QueryParams): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products/category/electronics",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], QueryParams>({
      query: (queryParams: QueryParams) => {
        const queryStr = generateQueryStr("?", queryParams);

        return { url: queryStr };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
