import { useEffect, useState } from "react";
import { PokemonType } from "../../types/PokemonType";
import { useParams } from "react-router-dom";

interface IProps {
    fetchPokemonDetails: (id: number) => Promise<PokemonType>
}
export function PokemonDetails({ fetchPokemonDetails }: IProps) {
    const params = useParams()
    const [pokemon, setPokemon] = useState<PokemonType>();

    useEffect(() => {
        (async () => {
            if (!params.id || params.id === '0') {
                return
            }
            const data = await fetchPokemonDetails(parseInt(params.id));
            setPokemon(data)
        })();
    }, []);

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.image} alt={pokemon?.name} />
            <strong>{pokemon?.type}</strong>

        </div>
    )
}