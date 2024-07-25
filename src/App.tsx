import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Register } from "./pages/Register/Register";
import { fetchPokemonList } from "./servives/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard fetchPokemonList={fetchPokemonList} />,
  },
  {
    path: "/sing-up",
    element: <Register />
  }
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}