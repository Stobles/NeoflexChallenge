import { RootState } from "@/app/store";
import { ProductsList } from "@/components/ProductsList";
import { useSelector } from "react-redux";

export const FavoritesPage = () => {
  const { favorites } = useSelector(
    (state: RootState) => state.rootReducer.favorite
  );
  return <ProductsList products={favorites} />;
};
