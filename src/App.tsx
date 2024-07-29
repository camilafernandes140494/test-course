import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Register } from "./pages/Register/Register";
import { fetchPokemonDetails, fetchPokemonList } from "./servives/Services";
import { PokemonDetails } from "./pages/PokemonDetails/PokemonDetails";


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
  },
  {
    path: "/pokemon-details/:id",
    element: <PokemonDetails fetchPokemonDetails={fetchPokemonDetails} />,
  },

]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}