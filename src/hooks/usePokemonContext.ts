import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

import { PokemonContextType } from "../context/types";

const usePokemonContext = () => {
  const context = useContext<PokemonContextType | undefined>(PokemonContext);

  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
};

export default usePokemonContext;
