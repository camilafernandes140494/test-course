import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react"

import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Register } from "../pages/Register/Register";
import { fetchPokemonList } from "../servives/Services";
import { faker } from "@faker-js/faker"

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [{
        id: 1,
        name: "pikachu",
        image: faker.image.urlPlaceholder(),
        type: "Eletric"
    }]
})

describe("Testa o componente de rotas", () => {
    test("Deve renderizar a página de login", () => {
        const router = createMemoryRouter([
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "*",
                element: <h1>Página não encontrada camis!</h1>,
            },
            {
                path: "/dashboard",
                element: <Dashboard fetchPokemonList={mockFetchListPokemonFn} />,
            },
            {
                path: "/sing-up",
                element: <Register />
            }

        ]);

        render(
            <RouterProvider router={router} />
        );

        const title = screen.getByText('Login');
        expect(title).toBeInTheDocument();
    });
});