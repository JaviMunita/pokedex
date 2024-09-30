import { useContext } from "react";
import { PokemonContext } from "../context/pokemon";

const usePokemonContext = () => useContext(PokemonContext);

export default usePokemonContext;
