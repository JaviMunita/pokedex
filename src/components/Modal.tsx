import { IconX } from "@tabler/icons-react";
import PokemonInfo from "./PokemonInfo";
import { typeColor } from "../constants/data";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  pokemon: any;
}

const Modal = ({ showModal, onClose, pokemon }: ModalProps) => {
  return (
    <section
      className={`fixed lg:hidden top-0 left-0 right-0 h-screen transition-all duration-500 ${
        typeColor[pokemon?.types[0]]
      } ${showModal ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <button
        onClick={onClose}
        className="bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-60 transition-opacity"
      >
        <IconX stroke={3} />
      </button>
      <article
        className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${
          showModal ? "bottom-0" : "-bottom-full"
        }`}
      >
        <PokemonInfo pokemon={pokemon} />
      </article>
    </section>
  );
};
export default Modal;
