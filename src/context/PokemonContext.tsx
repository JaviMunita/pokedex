import { createContext, useState } from "react";
import axios from "axios";
import {
  formatAbilities,
  formatStats,
  formatTypes,
  getPokemonDescription,
  getPokemonImage,
} from "../helpers/pokemon";
import {
  IPokemonDetail,
  IPokemonInfo,
  PokemonContextType,
  PokemonProviderProps,
} from "./types";

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetail | null>(
    null
  );
  const [showPokemonDetail, setShowPokemonDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showPokemon = async (pokemonInfo: IPokemonInfo) => {
    setIsLoading(true);
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
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

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
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
