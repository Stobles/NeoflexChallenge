import { Logo } from "@/components/Logo";
import { EarthIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-2 md:max-h-[200px] min-h-[150px] text-[17px] rounded-tl-3xl rounded-tr-3xl bg-background-white p-7">
      <div className="flex-auto max-w-[310px]">
        <Logo />
      </div>
      <div className="flex flex-col md:flex-row flex-1 gap-3 md:gap-1 text-center md:text-start md:min-w-[300px] justify-between mt-2">
        <nav className="flex flex-col gap-2 mb-2">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/favorites">Избранное</NavLink>
          <NavLink to="/cart">Корзина</NavLink>
        </nav>
        <div className="flex flex-col items-center md:items-start justify-between">
          <NavLink to="/conditions">Условия сервиса</NavLink>
          <div className="flex gap-2">
            <EarthIcon className="text-secondary" size={22} />
            <span className="text-primary-orange font-semibold cursor-pointer">
              Рус
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-start flex-auto max-w-[310px]">
        <ul className="flex items-end gap-2">
          <li className="w-[30px] h-[20px]">
            <Link target="_blank" to="https://vk.com/">
              <img
                className="w-full h-full object-contain object-center"
                src="/footer/vk.png"
                alt="vk"
              />
            </Link>
          </li>

          <li className="w-[30px] h-[23px]">
            <Link target="_blank" to="https://web.telegram.org/">
              <img
                className="w-full h-full object-contain object-center"
                src="/footer/telegram.png"
                alt="telegram"
              />
            </Link>
          </li>

          <li className="w-[30px] h-[23px]">
            <Link target="_blank" to="https://wa.me/75551234567">
              <img
                className="w-full h-full object-contain object-center"
                src="/footer/whatsapp.png"
                alt="whatsapp"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
