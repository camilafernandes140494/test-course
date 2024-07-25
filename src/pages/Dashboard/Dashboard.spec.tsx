import { render, screen } from "@testing-library/react"
import { Dashboard } from "./Dashboard"
import { faker } from "@faker-js/faker"
import { fetchPokemonList } from "../../servives/Services"

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [
        {
            id: 1,
            name: "pikachu",
            image: faker.image.urlPlaceholder(),
            type: "Eletric"
        },
        {
            id: 2,
            name: "Charmander",
            image: faker.image.urlPlaceholder(),
            type: "fogo"
        }
    ]
})
describe("Testa o componente de login", () => {
    test("Deve haver um title Sign in", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
        const title = await screen.findByRole("heading", {
            name: 'Dashboard'
        });
        expect(title).toBeInTheDocument();
    });

    test("Deve haver 2 items", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
        const itens = await screen.findAllByRole("listitem");
        expect(itens).toHaveLength(2);
    });


    test("Deve haver um pikachu", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
        const pikachu = await screen.findByText('pikachu')
        expect(pikachu).toBeInTheDocument();

    })


})