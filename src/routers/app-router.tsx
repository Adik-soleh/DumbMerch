import AdminLayout from "@/layouts/AdminLayout";
import { AuthLayout } from "@/layouts/authLayouts";
import UserShopLayout from "@/layouts/UserShopLayout";
import DetailProductPage from "@/pages/DetailProductPage";
import { EditCategory } from "@/pages/EditCategory";
import ListCategoryPage from "@/pages/ListCategoryPage";
import ListProductPage from "@/pages/ListProductPage";
import LoginPage from "@/pages/loginPage";
import ProductPage from "@/pages/ProductPage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "",
    element: <UserShopLayout />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "detail-product/:id",
        element: <DetailProductPage />,}
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path:"/admin",
    element: <AdminLayout/>,
    children: [
      {
        path: "category",
        element: <ListCategoryPage />,
      },
      {
        path: "edit-category/:id",
        element: <EditCategory />,
      },
      {
        path: "product",
        element: <ListProductPage />,
      },
    ]
  }
]);

export default AppRouter;
