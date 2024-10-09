import { typeColor } from "../constants/data";
import {
  pokemonCard,
  pokemonImage,
  pokemonType,
  hoverEffectCard,
} from "../constants/detailStyle";
import { usePokemonInfo } from "../hooks/usePokemonInfo";

interface IPokemonDetail {
  pokemonURL: string;
  onClick: any;
}

const PokemonDetail = ({ pokemonURL, onClick }: IPokemonDetail) => {
  const { pokemonInfo, loading, error } = usePokemonInfo(pokemonURL);

  if (loading)
    return (
      <div className="w-[60px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <img
          className="animate-spin"
          src="/pokeball-icon.png"
          alt="pokemon ball icon"
        />
      </div>
    );
  if (error) return <div>Error fetching Pokémon data.</div>;
  if (!pokemonInfo) return null;

  return (
    <article
      className={`${pokemonCard} ${hoverEffectCard} group`}
      onClick={() => onClick(pokemonInfo)}
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
