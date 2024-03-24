import { Button } from "@/components/Button";
import { HeartIcon } from "lucide-react";

export const Card = () => {
  return (
    <article className="flex flex-col justify-between w-full max-w-[350px] h-[410px] px-5 py-4 rounded-3xl bg-background-white shadow-card">
      <div className="w-full h-[240px]">
        <img
          className="w-full h-full object-contain object-center"
          src="/test.png"
          alt="product-img"
        />
      </div>
      <div className="flex flex-col gap-5 text-[17px]">
        <div className="flex justify-between items-center">
          <h3 className=" font-bold max-w-[170px] truncate">
            НазваниеНазваниеНазваниеНазваниеНазвание
          </h3>
          <div className="text-primary-orange font-bold text-end">2230 ₽</div>
        </div>
        <div className="flex justify-between items-center">
          <div>бибка</div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="orange">
              <HeartIcon size={22} />
            </Button>
            <Button className="px-0 text-[17px]" variant="link">
              Купить
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
