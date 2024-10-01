import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonDetail from "../components/PokemonDetail";
import { usePokemonInfo } from "../hooks/usePokemonInfo";

jest.mock("../hooks/usePokemonInfo");

const mockUsePokemonInfo = usePokemonInfo as jest.Mock;

describe("PokemonDetail Component", () => {
  it("shows 'Loading...' while loading", () => {
    mockUsePokemonInfo.mockReturnValue({
      pokemonInfo: null,
      loading: true,
      error: null,
    });

    render(<PokemonDetail pokemonURL="some-url" onClick={() => {}} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows error message when there's an error", () => {
    mockUsePokemonInfo.mockReturnValue({
      pokemonInfo: null,
      loading: false,
      error: true,
    });

    render(<PokemonDetail pokemonURL="some-url" onClick={() => {}} />);

    expect(
      screen.getByText("Error fetching Pokémon data.")
    ).toBeInTheDocument();
  });

  it("displays the Pokémon details when data is available", () => {
    mockUsePokemonInfo.mockReturnValue({
      pokemonInfo: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          versions: {
            "generation-v": {
              "black-white": {
                front_default: "bulbasaur.png",
              },
            },
          },
        },
        types: [{ type: { name: "grass" } }],
      },
      loading: false,
      error: null,
    });

    render(<PokemonDetail pokemonURL="some-url" onClick={() => {}} />);

    expect(screen.getByText("N°1")).toBeInTheDocument();
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("grass")).toBeInTheDocument();
    const image = screen.getByAltText("bulbasaur");
    expect(image).toHaveAttribute("src", "bulbasaur.png");
  });
});
