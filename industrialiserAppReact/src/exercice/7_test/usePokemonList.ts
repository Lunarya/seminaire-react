import { useCallback, useEffect, useMemo, useState } from "react";
import { getAll, Pokemon } from "../../API";

const useGetPokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    useEffect(() => {
        getAll().then(pok => setPokemon(pok))
    }, [])
    return pokemon
}

const usePokemonList = (): { pokemon: Pokemon[], filter: (filter: string) => void } => {
    const pokemon = useGetPokemon();
    const [filterRegex, setFilterRegex] = useState<string>("");
    const debounceFilter = useDebounce(filterRegex);
    const filter = useCallback((filter: string) => {
        setFilterRegex(filter);
    }, []);


    const filterListPokemon = useMemo(
        () => pokemon?.filter(
            item => item.name.toLocaleLowerCase()
                .includes(debounceFilter.toLocaleLowerCase())
        ),
        [pokemon, debounceFilter]
    )

    return { pokemon: filterListPokemon, filter }

}

export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default usePokemonList;