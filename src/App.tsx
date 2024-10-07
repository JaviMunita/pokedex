import Drawer from "./components/Drawer";
import Modal from "./components/Modal";
import Pokemons from "./components/Pokemons";
import usePokemonContext from "./hooks/usePokemonContext";

function App() {
  const { showPokemonDetail, closePokemonDetail, pokemonDetail, isLoading } =
    usePokemonContext();

  return (
    <section className="bg-[#EFEFEF] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] overflow-x-hidden">
        <Pokemons />
        <Drawer pokemon={pokemonDetail} isLoading={isLoading} />
        <Modal
          showModal={showPokemonDetail}
          onClose={closePokemonDetail}
          pokemon={pokemonDetail}
        />
      </main>
    </section>
  );
}

export default App;
