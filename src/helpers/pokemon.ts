import { Stat, Type, Species, Sprites, Ability } from "../context/types";

const formatStats = (stats: Stat[]) => {
  const nameTypes = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SpA",
    "special-defense": "SpD",
    speed: "SPD",
  };

  const newStats = stats.map(({ stat, base_stat }) => {
    const statName =
      nameTypes[stat.name as keyof typeof nameTypes] || stat.name; // Fallback to stat.name if no match
    return {
      name: statName,
      base_stat,
    };
  });

  return newStats;
};

const formatTypes = (types: Type[]) => types.map((type) => type.type.name);

const formatAbilities = (abilities: Ability[]) =>
  abilities.map((ability) => ability.ability.name);

const getPokemonDescription = (pokemonSpecies: Species) =>
  pokemonSpecies.flavor_text_entries[1].flavor_text;

const getPokemonImage = (sprites: Sprites) => {
  return (
    sprites.versions["generation-v"]["black-white"].animated.front_default ??
    sprites.versions["generation-v"]["black-white"].front_default
  );
};

export {
  formatStats,
  formatTypes,
  formatAbilities,
  getPokemonDescription,
  getPokemonImage,
};
