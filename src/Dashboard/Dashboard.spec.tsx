import { render, screen } from "@testing-library/react"
import { Dashboard } from "./Dashboard"

describe("Testa o componente de login", () => {
    test("Deve haver um title Sign in", async () => {
        render(<Dashboard />);
        const title = await screen.findByRole("heading", {
            name: 'Dashboard'
        });
        expect(title).toBeInTheDocument();
    });


})