import { CartPage } from "@/views/Cart";
import { HomePage } from "@/views/Home";

const HOME_ROUTE = "/";
const CART_ROUTE = "/cart";

export const routes = [
  { path: HOME_ROUTE, Component: HomePage },
  { path: CART_ROUTE, Component: CartPage },
];
