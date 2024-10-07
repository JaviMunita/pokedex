import axios from "axios";
import { useState, useEffect } from "react";

import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";

function Pokemons() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const handleChangePokemonName = (e: { target: { value: string } }) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-4 py-5">
      <SearchBar onChange={handleChangePokemonName} />
      <PokemonList pokemons={allPokemons} pokemonName={pokemonName} />
    </section>
  );
}

export default Pokemons;
