import { Button } from "@/components/Button";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "@/features/products/slices/cartSlice";
import { CartProduct } from "@/features/types";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export const CartProductCard = ({
  cartProduct,
}: {
  cartProduct: CartProduct;
}) => {
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(addToCart(cartProduct.product));
  };

  const onRemove = () => {
    if (cartProduct.quantity === 1)
      return toast.info("Количество товара не может быть меньше 1.");

    dispatch(removeFromCart(cartProduct.product));
  };

  const onDelete = () => {
    dispatch(deleteFromCart(cartProduct.product));
  };
  return (
    <article className="w-full flex flex-col bg-background-white h-[220px] rounded-3xl relative overflow-hidden p-5">
      <Button
        className="absolute top-2 right-4 bg-background-white"
        variant="ghost"
        size="icon"
        onClick={onDelete}
      >
        <TrashIcon className="text-destructive" size={24} />
      </Button>
      <div className="flex items-center gap-4 text-[14px] md:text-[17px] mb-4">
        <div className="w-[145px] h-[135px]">
          <img
            src={cartProduct.product.image}
            className="w-full h-full object-contain object-center"
            alt="product_image"
          />
        </div>
        <div>
          <div className="font-semibold max-w-[400px] line-clamp-2">
            {cartProduct.product.title}
          </div>
          <div className="font-semibold text-[.9em] text-secondary">
            {cartProduct.product.price} $
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4  md:ml-5">
          <Button
            onClick={onRemove}
            className="rounded-full"
            size="icon"
            variant="orange"
          >
            <MinusIcon />
          </Button>
          <span className="font-bold">{cartProduct.quantity}</span>
          <Button
            onClick={onAdd}
            className="rounded-full"
            size="icon"
            variant="orange"
          >
            <PlusIcon />
          </Button>
        </div>
        <div className="font-semibold">
          {cartProduct.product.price * cartProduct.quantity} $
        </div>
      </div>
    </article>
  );
};
