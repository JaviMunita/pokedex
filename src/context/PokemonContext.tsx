import { createContext, useEffect, useState } from "react";
import {
  formatAbilities,
  formatStats,
  formatTypes,
  getPokemonDescription,
  getPokemonImage,
} from "../helpers/pokemon";
import axios from "axios";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [showPokemonDetail, setShowPokemonDetail] = useState(false);

  const showPokemon = async (pokemonInfo) => {
    const { data: description } = await axios.get(pokemonInfo.species.url);
    const { id, name, height, weight, stats, types, abilities } = pokemonInfo;

    const formattedPokemonDetail = {
      id,
      name,
      height,
      weight,
      types: formatTypes(types),
      stats: formatStats(stats),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(description),
      image: getPokemonImage(pokemonInfo.sprites),
    };

    setPokemonDetail(formattedPokemonDetail);
    setShowPokemonDetail(true);
  };

  useEffect(() => {
    if (pokemonDetail) {
      console.log("Updated pokemonDetail:", pokemonDetail);
    }
  }, [pokemonDetail]);

  const closePokemonDetail = () => {
    setShowPokemonDetail(false);
  };

  return (
    <PokemonContext.Provider
      value={{
        showPokemonDetail,
        showPokemon,
        closePokemonDetail,
        pokemonDetail,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
