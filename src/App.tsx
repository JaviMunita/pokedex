import Drawer from "./components/Drawer";
import Modal from "./components/Modal";
import Pokemons from "./components/Pokemons";
import usePokemonContext from "./hooks/usePokemonContext";

function App() {
  const { showPokemonDetail, closePokemonDetail } = usePokemonContext();
  return (
    <section className="bg-[#EFEFEF] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <Drawer />
        <Modal showModal={showPokemonDetail} onClose={closePokemonDetail} />
      </main>
    </section>
  );
}

export default App;
