// @ts-nocheck
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { usePokemonInfo } from "../hooks/usePokemonInfo";
import PokemonDetail from "../components/PokemonDetail";

jest.mock("../hooks/usePokemonInfo");

const mockPokemonInfo = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          front_default: "https://example.com/bulbasaur.png",
        },
      },
    },
  },
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
};

test("renders pokemon data correctly", () => {
  usePokemonInfo.mockReturnValue({
    pokemonInfo: mockPokemonInfo,
    loading: false,
    error: null,
  });

  render(
    <PokemonDetail
      pokemonURL="https://example.com/pokemon/1"
      onClick={() => {}}
    />
  );

  expect(screen.getByText(/N°1/i)).toBeInTheDocument();
  expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();

  expect(screen.getByRole("img", { name: /bulbasaur/i })).toBeInTheDocument();

  expect(screen.getByText(/grass/i)).toBeInTheDocument();
  expect(screen.getByText(/poison/i)).toBeInTheDocument();
});

test("displays loading state", () => {
  usePokemonInfo.mockReturnValue({
    pokemonInfo: null,
    loading: true,
    error: null,
  });

  render(
    <PokemonDetail
      pokemonURL="https://example.com/pokemon/1"
      onClick={jest.fn()}
    />
  );

  const loadingElement = screen.getByAltText(/pokemon ball icon/i);
  expect(loadingElement).toBeInTheDocument();
});

test("displays error message", () => {
  usePokemonInfo.mockReturnValue({
    pokemonInfo: null,
    loading: false,
    error: "Error fetching Pokémon data.",
  });

  render(
    <PokemonDetail
      pokemonURL="https://example.com/pokemon/1"
      onClick={jest.fn()}
    />
  );

  expect(screen.getByText(/Error fetching Pokémon data./i)).toBeInTheDocument();
});
