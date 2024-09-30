import { IconX } from "@tabler/icons-react";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

const Modal = ({ showModal, onClose }: ModalProps) => {
  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen bg-red-500 transition-all duration-500 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
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
        Pokemon
      </article>
    </section>
  );
};
export default Modal;
