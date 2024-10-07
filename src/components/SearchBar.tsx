import { IconSearch } from "@tabler/icons-react";

interface SearchBarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <form>
      <div className="bg-white p-4 flex rounded-2xl text-lg shadow-lg">
        <input
          className="outline-none flex-1"
          type="text"
          placeholder="Search by name"
          name="pokemonName"
          onChange={onChange}
        />
        <div className="bg-[#E3350D] p-2 rounded-xl">
          <IconSearch color="white" stroke={3} />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
