import { CartPage } from "@/views/Cart";
import { FavoritesPage } from "@/views/Favorites";
import { HomePage } from "@/views/Home";

const HOME_ROUTE = "/";
const FAVORITES_ROUTE = "/favorites";
const CART_ROUTE = "/cart";

export const routes = [
  { path: HOME_ROUTE, Component: HomePage },
  { path: FAVORITES_ROUTE, Component: FavoritesPage },
  { path: CART_ROUTE, Component: CartPage },
];
