import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import PokemonDetail from "./PokemonDetail";
import usePokemonContext from "../hooks/usePokemonContext";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface IPokemon {
  url: string;
}

interface IPokemons {
  pokemons: IPokemon[];
}
const PokemonList = ({ pokemons }: IPokemons) => {
  const { showPokemon } = usePokemonContext();
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 20;
  const lastIndex = currentPage * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonCards = pokemons.slice(firstIndex, lastIndex);

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
        activeItemClassName="bg-[#E6BC2F] text-white"
        previousLabel={<IconChevronLeft stroke={4} color="#EE6B2F" />}
        nextLabel={<IconChevronRight stroke={4} color="#EE6B2F" />}
        current={currentPage}
        total={pokemonsPerPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PokemonList;
