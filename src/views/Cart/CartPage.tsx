import { useSelector } from "react-redux";
import { CartProductCard } from "./components/CartProduct";
import { RootState } from "@/app/store";
import { Button } from "@/components/Button";

export const CartPage = () => {
  const { cart, total } = useSelector(
    (state: RootState) => state.rootReducer.carts
  );
  return (
    <div className="w-full h-full mt-6">
      <h2 className="text-xl font-bold mb-4">Корзина</h2>
      <div className="w-full flex flex-col-reverse gap-5 md:grid md:justify-between md:grid-cols-cart md:grid-rows-cart gap-x-4">
        {cart.length ? (
          <div className="gap-4 row-span-full space-y-2 h-full max-h-[70vh] overflow-y-auto">
            {cart?.map((cartProduct) => (
              <CartProductCard
                key={cartProduct.product.id}
                cartProduct={cartProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-2xl font-semibold text-center mt-5">
            В корзине нет товаров
          </div>
        )}
        <div className="flex flex-col justify-between h-[120px] md:col-span-1 bg-background-white rounded-3xl overflow-hidden">
          <div className="flex justify-between w-full px-4 pt-5 font-bold">
            <div>ИТОГО</div>
            <div>$ {total}</div>
          </div>
          <Button className="h-14 text-lg" size="full">
            Перейти к оформлению
          </Button>
        </div>
      </div>
    </div>
  );
};
