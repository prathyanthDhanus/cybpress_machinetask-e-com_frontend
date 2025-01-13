import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import UnauthorizedPage from "../../pages/common/Unauthorized";
import PageNotFound from "../../pages/common/PageNotFound";
import MainLoader from "../../components/loader/mainLoader/MainLoader";
import UserLayout from "../../layouts/UserLayout";

const LandingPage = lazy(() => import("../../pages/landingPage/LandingPage"));
const LoginPage = lazy(() => import("../../pages/auth/LoginPage"));
const Register = lazy(() => import("../../pages/auth/RegisterPage"));
const HomePage = lazy(() => import("../../pages/user/HomePage"));
const ViewAllProducts  = lazy(() => import("../../pages/user/ViewAllProducts"));
const ProductDetailView = lazy(() => import("../../pages/user/ProductDetailView"));
const Checkout = lazy(() => import("../../pages/user/Checkout"));

export const userRouter = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/unauthorized",
        element: <UnauthorizedPage />,
      },
      {
        path: "*", // Wildcard for unmatched routes
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<MainLoader />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<MainLoader />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<MainLoader />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<MainLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/categories/:categoryName/:categoryId/products",
        element: (
          <Suspense fallback={<MainLoader />}>
            <ViewAllProducts />
          </Suspense>
        ),
      },
      {
        path: "/product/:productId",
        element: (
          <Suspense fallback={<MainLoader />}>
            <ProductDetailView />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<MainLoader />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);
