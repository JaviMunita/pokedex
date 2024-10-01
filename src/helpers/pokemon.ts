const formatStats = (stats) => {
  const nameTypes = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SpA",
    "special-defense": "SpD",
    speed: "SPD",
  };

  const newStats = stats.map(({ stat, base_stat }) => ({
    name: nameTypes[stat.name],
    base_stat,
  }));

  return newStats;
};

const formatTypes = (types) => types.map((type) => type.type.name);

const formatAbilities = (abilities) =>
  abilities.map((ability) => ability.ability.name);

const getPokemonDescription = (pokemonSpecies) =>
  pokemonSpecies.flavor_text_entries[1].flavor_text;

const getPokemonImage = (sprites) => {
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
