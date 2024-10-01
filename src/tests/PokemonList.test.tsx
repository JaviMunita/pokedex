import { render, screen } from "@testing-library/react";

import PokemonList from "../components/PokemonList";
import usePokemonContext from "../hooks/usePokemonContext";

jest.mock("../hooks/usePokemonContext");

describe("PokemonList", () => {
  const mockPokemons = [
    { url: "https://pokeapi.co/api/v2/pokemon/1", name: "Bulbasaur" },
    { url: "https://pokeapi.co/api/v2/pokemon/2", name: "Ivysaur" },
  ];

  beforeEach(() => {
    (usePokemonContext as jest.Mock).mockReturnValue({
      showPokemon: jest.fn(),
    });
  });

  test("renders Pokémon list", () => {
    render(<PokemonList pokemons={mockPokemons} pokemonName="" />);

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
  });
});
