import PokemonDetail from "./PokemonDetail";
import usePokemonContext from "../hooks/usePokemonContext";

interface IPokemon {
  url: string;
}

interface IPokemons {
  pokemons: IPokemon[];
}
const PokemonList = ({ pokemons }: IPokemons) => {
  const { showPokemonById } = usePokemonContext();
  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14">
      {pokemons.map((pokemon) => (
        <PokemonDetail
          key={pokemon.url}
          pokemonURL={pokemon.url}
          onClick={showPokemonById}
        />
      ))}
    </section>
  );
};

export default PokemonList;
