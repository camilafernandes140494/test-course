import { useEffect, useState } from "react";
import { PokemonType } from "../types/PokemonType";

export function Dashboard() {
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('http://localhost:3000/pokemon');
            const data = await response.json()
            setPokemons(data);

        }
        loadData()

    }, []);
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1>Dashboard</h1>
            <ul>
                {
                    pokemons.map((pokemon) =>
                    (
                        <li key={pokemon.id}>
                            <h1>{pokemon.name}</h1>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <strong>{pokemon.type}</strong>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}