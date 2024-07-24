import { useEffect, useState } from "react";
import { PokemonType } from "../types/PokemonType";

interface IProps {
    fetchPokemonList: () => Promise<PokemonType[]>
}
export function Dashboard({ fetchPokemonList }: IProps) {
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    useEffect(() => {
        (async () => {
            const data = await fetchPokemonList();
            setPokemons(data)
        })();
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