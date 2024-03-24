import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto h-full">
      <Header />
      <main className="flex-1 px-2.5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
