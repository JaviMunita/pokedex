import { ChangeEventHandler } from "react";

interface TypeFilter {
  selectedType: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  types: string[];
}

const TypeFilter = ({ selectedType, onChange, types }: TypeFilter) => {
  return (
    <div className="bg-red flex justify-end mt-4 mb-3">
      <select
        className="bg-white p-4 rounded-2xl text-lg shadow-lg capitalize color-[#E3350D] outline-none"
        value={selectedType}
        onChange={onChange}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
