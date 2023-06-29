import { TextField } from "@mui/material";
import usePokemonList from "./usePokemonList";

const TestPokemon = () => {
    const { pokemon, filter } = usePokemonList();
    return (
        <div>
            <h1>Pokemons</h1>
            <input data-testId="filterField" onChange={(e) => filter(e.target.value)}></input>
            <div style={{ maxHeight: "30rem", overflow: "auto" }}>
                {pokemon.map(p => <p key={p.id}>{p.name}</p>)}
            </div>
        </div>
    )
}
export default TestPokemon;
