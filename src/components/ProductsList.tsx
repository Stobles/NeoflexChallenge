import { ProductCard } from "./ProductCard";
import { LoaderCircle } from "lucide-react";
import { Product } from "@/features/types";

export const ProductsList = ({
  products,
  isLoading,
}: {
  products: Product[] | undefined;
  isLoading?: boolean;
}) => {
  const productsCount = products?.length || 0;

  return (
    <div className="w-full h-full mt-2">
      <h2 className="text-lg font-semibold text-secondary">
        Товары - {productsCount}
      </h2>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-4">
        {isLoading ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <>
            {products?.length ? (
              products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="text-lg font-semibold">Нет товаров</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
