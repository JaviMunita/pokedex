export interface IPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: [];
  stats: Stat[];
  abilities: [];
  description: string;
  image: string;
}
export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
}
export interface Stat {
  name: string;
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface Species {
  flavor_text_entries: string;
  url: string;
  name: string;
}
export interface Sprites {
  versions: any;
  front_default: string;
}
export interface IPokemonInfo {
  abilities: [];
  height: number;
  id: number;
  name: string;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
export interface PokemonContextType {
  showPokemonDetail: boolean;
  showPokemon: (IPokemonInfo) => void;
  closePokemonDetail: () => void;
  pokemonDetail: IPokemonDetail | null;
  isLoading: boolean;
}
export interface PokemonProviderProps {
  children: ReactNode;
}
