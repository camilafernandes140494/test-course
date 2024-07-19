import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react"

import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";


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
                element: <Dashboard />,
            },
        ]);

        render(
            <RouterProvider router={router} />
        );

        const title = screen.getByText('Sign in');
        expect(title).toBeInTheDocument();
    });
});