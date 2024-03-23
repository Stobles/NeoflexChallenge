import { HomePage } from "@/views/Home/HomePage";
import { MainLayout } from "@/views/Layouts/MainLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const AppRouter = () => {
  const AppRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route element={<HomePage />} path="/" />
      </Route>
    )
  );

  return <RouterProvider router={AppRoutes} />;
};

export default AppRouter;
