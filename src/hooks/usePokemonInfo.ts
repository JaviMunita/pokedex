import { useEffect, useState } from "react";
import axios from "axios";

interface PokemonInfo {
  id: number;
  name: string;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          front_default: string;
        };
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export const usePokemonInfo = (pokemonURL: string) => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => {
        setPokemonInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [pokemonURL]);

  return { pokemonInfo, loading, error };
};
