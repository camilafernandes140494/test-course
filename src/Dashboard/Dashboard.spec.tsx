import { render, screen } from "@testing-library/react"
import { Dashboard } from "./Dashboard"
import { faker } from "@faker-js/faker"
import { fetchPokemonList } from "../servives/Services"

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [{
        id: 1,
        name: "pikachu",
        image: faker.image.urlPlaceholder(),
        type: "Eletric"
    }]
})
describe("Testa o componente de login", () => {
    test("Deve haver um title Sign in", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
        const title = await screen.findByRole("heading", {
            name: 'Dashboard'
        });
        expect(title).toBeInTheDocument();
    });


})