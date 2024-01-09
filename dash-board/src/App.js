import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import DashBoard from "./pages/DashBoard";
import LogInForm from "./components/Register/SignInForm";
import { useContext } from "react";
import { LogInContext } from "./Context/LogInProvider";
import Toast from "./components/Register/Toast";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import UsersTable from "./components/Users/UsersTable";
import ProductsTable from "./components/products/ProductsTable";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/dashboard"} replace />,
    },
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "users",
          element: <UsersTable />,
        },
        {
          path: "products",
          element: <ProductsTable />,
        },
      ],
    },
  ]);
  const { token, validationErr } = useSelector((state) => state.user);
  return (
    <div className="App bg-slate-900 h-screen">
      {/* <DashBoard></DashBoard> */}
      {validationErr ? <Toast msg={validationErr}></Toast> : <></>}
      {token ? <RouterProvider router={router} /> : <LogInForm />}
    </div>
  );
}

export default App;
