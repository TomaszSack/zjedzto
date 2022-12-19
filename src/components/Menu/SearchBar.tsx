import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState();

    const handleChange = (e:any) => {
        e.preventDefault();
        setValue(e.target.value)
    }
  return (
    <div className="flex justify-around items-center w-full bg-tertiary-orange h-11 my-20 rounded-t-xl text-center">
      <div className="w-1/12 h-1/2 bg-white text-lg leading-5 shadow">Sortuj▾</div>
      <input
        type="text"
        name="search"
        placeholder="Szukaj"
        value={value}
        onChange={handleChange}
        className="w-3/12 h-4/6 bg-white text-xl leading-6 text-center shadow-lg"
      />
      <div className="w-1/12 h-1/2 bg-white text-lg leading-5 shadow">Filtry▾</div>
    </div>
  );
};
export default SearchBar;
