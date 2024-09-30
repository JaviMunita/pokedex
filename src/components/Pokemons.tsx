import axios from "axios";
import { useEffect, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import PokemonList from "./PokemonList";

function Pokemons() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  const handleChangePokemonName = (e) =>
    setPokemonName(e.target.value.toLowerCase());

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg shadow-lg">
          <input
            className="outline-none flex-1"
            type="text"
            placeholder="Search by name"
            name="pokemonName"
            onChange={handleChangePokemonName}
          />
          <div className="bg-[#E3350D] p-2 rounded-xl">
            <IconSearch color="white" stroke={3} />
          </div>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName} />
    </section>
  );
}

export default Pokemons;
