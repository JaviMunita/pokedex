import { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import PokemonDetail from "./PokemonDetail";
import usePokemonContext from "../hooks/usePokemonContext";

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
  const pokemonsPerPage = 20;

  // Filter by pokemon name
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  // Reset to first page when the name filter is used
  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonName]);

  // Constants that calculate the range of Pokémon to display for the current page
  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonCards = filteredPokemons.slice(firstIndex, lastIndex);

  return (
    <>
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
        total={Math.ceil(filteredPokemons.length / pokemonsPerPage)} // Calculate pages based on filtered results
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PokemonList;
