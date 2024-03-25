import { ProductsList } from "@/components/ProductsList";
import { useGetProductsQuery } from "@/features/products/api/productsApi";

export const HomePage = () => {
  const { data: products, isLoading } = useGetProductsQuery({});
  return <ProductsList products={products} isLoading={isLoading} />;
};
