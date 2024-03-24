import { useGetProductsQuery } from "@/features/products/api/productsApi";
import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  const { data } = useGetProductsQuery({});

  return (
    <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-4">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
