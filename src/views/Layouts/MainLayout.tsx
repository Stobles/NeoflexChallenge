import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="h-full">
      <main className="min-h-[100vh - 3rem]">
        <Outlet />
      </main>
    </div>
  );
};
