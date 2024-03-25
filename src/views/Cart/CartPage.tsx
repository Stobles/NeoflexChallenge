import { CartProduct } from "./components/CartProduct";

export const CartPage = () => {
  const;
  return (
    <div className="w-full mt-6">
      <h2 className="text-xl font-bold mb-4">Корзина</h2>
      <div className="w-full grid justify-between grid-cols-cart grid-rows-cart">
        <div className="gap-4 row-span-full space-y-2 overflow-y-auto">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className="col-span-1 bg-background-white rounded-3xl"></div>
      </div>
    </div>
  );
};
