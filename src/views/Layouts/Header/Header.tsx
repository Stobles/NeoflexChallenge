import { RootState } from "@/app/store";
import { Logo } from "@/components/Logo";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { favorites } = useSelector(
    (state: RootState) => state.rootReducer.favorite
  );
  const { cart } = useSelector((state: RootState) => state.rootReducer.carts);

  const favoritesCount = favorites.length;
  const cartCount = cart?.length;
  return (
    <header className="flex items-center justify-between w-full min-h-16 px-2.5 md:px-0">
      <Logo />
      <nav className="flex items-end gap-8 pr-2">
        <Link to="/favorites" className="relative">
          <HeartIcon className="text-secondary" size={25} />
          <span className="flex items-center justify-center text-sm absolute -top-1 -right-2 w-[18px] h-[18px] bg-background-orange rounded-full text-primary-foreground">
            {favoritesCount}
          </span>
        </Link>
        <Link to="/cart" className="relative">
          <ShoppingCartIcon className="text-secondary" size={25} />
          <span className="flex items-center justify-center text-sm absolute -top-1 -right-2 w-[18px] h-[18px] bg-background-orange rounded-full text-primary-foreground">
            {cartCount}
          </span>
        </Link>
      </nav>
    </header>
  );
};
