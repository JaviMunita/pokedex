import { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import PokemonDetail from "./PokemonDetail";
import usePokemonContext from "../hooks/usePokemonContext";
import TypeFilter from "./TypeFilter";

interface IPokemon {
  url: string;
  name: string;
}

interface IPokemons {
  pokemons: IPokemon[];
  pokemonName: string;
}

const PokemonList = ({ pokemons, pokemonName }: IPokemons) => {
  const { showPokemon } = usePokemonContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [filteredByType, setFilteredByType] = useState<IPokemon[]>(pokemons);
  const pokemonsPerPage = 20;

  // Fetch types for select options
  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type/");
      const data = await response.json();
      setTypes(data.results.map((type: any) => type.name));
    };

    fetchTypes();
  }, []);

  // Filter pokemon by selected type
  useEffect(() => {
    if (selectedType) {
      // Gets the data of the selected type pokemons
      const fetchPokemonsByType = async () => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/type/${selectedType}`
        );
        const data = await response.json();
        // Stores name and url in a new array created from the data
        const typePokemons = data.pokemon.map((p: any) => ({
          name: p.pokemon.name,
          url: p.pokemon.url,
        }));
        setFilteredByType(typePokemons);
      };

      fetchPokemonsByType();
    } else {
      // If no type is selected, it resets to the full list
      setFilteredByType(pokemons);
    }
  }, [selectedType, pokemons]);

  // Filter by name
  const filteredByName = filteredByType.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  // Reset to first page when the name filter or type filter is used
  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonName, selectedType]);

  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonCards = filteredByName.slice(firstIndex, lastIndex);

  return (
    <>
      <TypeFilter
        selectedType={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        types={types}
      />

      <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14">
        {pokemonCards.map((pokemon) => (
          <PokemonDetail
            key={pokemon.url}
            pokemonURL={pokemon.url}
            onClick={showPokemon}
          />
        ))}
      </section>

      <ResponsivePagination
        className="flex gap-2 w-fit m-auto mt-5"
        pageItemClassName="bg-white p-2 font-semibold rounded-full shadow-lg w-[30px] aspect-square grid place-content-center hover:scale-110"
        activeItemClassName="bg-[#EFCE5E]"
        previousLabel={<IconChevronLeft stroke={4} color="#EE6B2F" />}
        nextLabel={<IconChevronRight stroke={4} color="#EE6B2F" />}
        current={currentPage}
        total={Math.ceil(filteredByName.length / pokemonsPerPage)}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PokemonList;
