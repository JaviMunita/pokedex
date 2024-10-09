// @ts-nocheck
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { IPokemonDetail } from "../context/types";
import PokemonInfo from "../components/PokemonInfo";

const mockPokemon: IPokemonDetail = {
  id: 1,
  name: "bulbasaur",
  image: "https://example.com/bulbasaur.png",
  types: ["grass", "poison"],
  description: "A strange seed was planted on its back at birth.",
  abilities: ["overgrow", "chlorophyll"],
  stats: [
    { name: "hp", base_stat: 45 },
    { name: "attack", base_stat: 49 },
  ],
  height: 0.7,
  weight: 6.9,
};

test("renders pokemon data correctly", () => {
  render(<PokemonInfo pokemon={mockPokemon} />);

  expect(screen.getByText(/N° 1/i)).toBeInTheDocument();
  expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();

  expect(screen.getByText(/0.7m/i)).toBeInTheDocument();
  expect(screen.getByText(/6.9kg/i)).toBeInTheDocument();

  expect(screen.getByText(/grass/i)).toBeInTheDocument();
  expect(screen.getByText(/poison/i)).toBeInTheDocument();

  expect(screen.getByText(/overgrow/i)).toBeInTheDocument();
  expect(screen.getByText(/chlorophyll/i)).toBeInTheDocument();

  expect(screen.getByText(/hp/i)).toBeInTheDocument();
  expect(screen.getByText(/45/i)).toBeInTheDocument();

  expect(
    screen.getByText(/A strange seed was planted on its back at birth/i)
  ).toBeInTheDocument();
});
