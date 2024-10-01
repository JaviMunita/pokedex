export interface IPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  stats: [{}];
  abilities: string[];
  description: string;
  image: string;
}

export interface Ability {
  ability: Ability2;
  slot: number;
}

export interface Ability2 {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Species {
  flavor_text_entries: any;
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
  showPokemon: (pokemonInfo: any) => void; // You can create a more specific type
  closePokemonDetail: () => void;
  pokemonDetail: IPokemonDetail | null;
  isLoading: boolean;
}

export interface PokemonProviderProps {
  children: ReactNode;
}
