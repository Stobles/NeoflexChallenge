import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const MainLayout = () => {
  return (
    <div className="h-full">
      <Header />
      <main className="min-h-[100vh - 4rem]">
        <Outlet />
      </main>
    </div>
  );
};
