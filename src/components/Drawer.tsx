import PokemonInfo from "./PokemonInfo";

const Drawer = ({ pokemon }) => {
  return (
    <section className="hidden lg:block h-screen sticky top-0 mt-4">
      <article
        className={`absolute bottom-0 h-[85%] w-full rounded-tl-3xl rounded-tr-3xl bg-white text-centertransition-all duration-500 ${
          pokemon ? "left-0" : "left-[50vw]"
        }`}
      >
        <PokemonInfo pokemon={pokemon} />
      </article>
      <article
        className={`absolute bottom-0 h-[85%] w-full rounded-tl-3xl rounded-tr-3xl bg-white text-center grid place-content-center transition-all duration-500 ${
          pokemon ? "left-[50vw]" : "left-0"
        }`}
      >
        <header className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 scale-90">
          <img src="public/pokeball-icon.png" alt="" />
        </header>
        <span className="text-lg px-20 text-[#919191]">
          Who's that pokémon?
        </span>
      </article>
    </section>
  );
};

export default Drawer;
