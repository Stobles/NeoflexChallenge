import { RootState } from "@/app/store";
import { Button } from "@/components/Button";
import { addToCart } from "@/features/products/slices/cartSlice";
import { toggleFavorite } from "@/features/products/slices/favoritesSlice";
import { Product } from "@/features/types";
import { HeartIcon, HeartOffIcon, StarIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

type ProductCardType = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardType) => {
  const { favorites } = useSelector(
    (state: RootState) => state.rootReducer.favorite
  );
  const { cart } = useSelector((state: RootState) => state.rootReducer.carts);
  const dispatch = useDispatch();

  const isFavorited = favorites.find((favorite) => product.id === favorite.id);
  const isInCart = cart.find(
    (cartProduct) => cartProduct.product.id === product.id
  );

  const onBuyClick = () => {
    if (isInCart) return toast.info("Товар уже в корзине.");
    toast.success("Товар добавлен в корзину.");
    dispatch(addToCart(product));
  };

  const onToggleFavoritesClick = () => {
    dispatch(toggleFavorite(product));
  };
  return (
    <article className="flex flex-col justify-between w-full max-w-[350px] h-[410px] px-5 py-4 rounded-3xl bg-background-white shadow-card">
      <div className="w-full h-[240px]">
        <img
          className="w-full h-full object-contain object-center"
          src={product.image}
          alt="product-img"
        />
      </div>
      <div className="flex flex-col gap-5 text-[17px]">
        <div className="flex justify-between items-center">
          <h3 className=" font-bold max-w-[200px] line-clamp-2">
            {product.title}
          </h3>
          <div className="text-primary-orange font-bold text-end">2230 ₽</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <StarIcon fill="orange" className="text-primary-orange" size={24} />
            <span className="text-secondary font-semibold">
              {product.rating.rate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={onToggleFavoritesClick}
              size="icon"
              variant="orange"
            >
              {isFavorited ? (
                <HeartOffIcon size={22} />
              ) : (
                <HeartIcon size={22} />
              )}
            </Button>
            <Button
              onClick={onBuyClick}
              className="px-0 text-[17px]"
              variant="link"
            >
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
