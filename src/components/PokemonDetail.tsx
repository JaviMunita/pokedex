import { typeColor } from "../constants/colors";
import {
  pokemonCard,
  pokemonImage,
  pokemonType,
  hoverEffectCard,
} from "../constants/detailStyle";
import { usePokemonInfo } from "../hooks/usePokemonInfo";

interface PokemonDetail {
  pokemonURL: string;
}

const PokemonDetail = ({ pokemonURL, onClick }: PokemonDetail) => {
  const { pokemonInfo, loading, error } = usePokemonInfo(pokemonURL);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !pokemonInfo) {
    return <div>Error fetching Pokémon data.</div>;
  }

  return (
    <article
      className={`${pokemonCard} ${hoverEffectCard} group`}
      onClick={onClick}
    >
      <header className="h-9">
        <img
          className={`${pokemonImage} group-hover:scale-110 pixelated`}
          src={
            pokemonInfo.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt={pokemonInfo.name}
        />
      </header>
      <span className="text-sm text-[#919191]">N°{pokemonInfo.id}</span>
      <h4 className="text-lg">{pokemonInfo.name}</h4>
      <ul className="flex gap-2 justify-center">
        {pokemonInfo.types.map((type) => (
          <li
            className={`${pokemonType} ${
              typeColor[type.type.name] || "bg-gray-200"
            }`}
            key={type.type.name}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonDetail;
