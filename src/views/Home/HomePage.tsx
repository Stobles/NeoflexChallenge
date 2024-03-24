import { ProductsList } from "./components/ProductsList";

export const HomePage = () => {
  return (
    <div className="w-full h-full mt-2">
      <h2 className="text-lg font-semibold text-secondary">Товары - 12</h2>
      <ProductsList />
    </div>
  );
};
