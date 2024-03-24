import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="block w-[85px] h-[30px]">
      <img
        className="w-full h-full object-contain object-center"
        src="/public/logo.svg"
        alt="logo"
      />
    </Link>
  );
};
