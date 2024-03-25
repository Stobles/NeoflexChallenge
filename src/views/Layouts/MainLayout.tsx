import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-col max-w-[1150px] mx-auto min-h-screen">
      <Header />
      <main className="flex-1 px-2.5 mb-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
