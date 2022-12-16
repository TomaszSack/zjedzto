import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    const [value, setValue] = useState();

    const handleChange = (e:any) => {
        e.preventDefault();
        setValue(e.target.value)
    }
  return (
    <div className="flex justify-around items-center w-full bg-tertiary-orange h-11 my-20 rounded-t-xl text-center">
      <div className="w-1/12 h-1/2 bg-white text-lg leading-5">Sortuj▾</div>
      {/* <div className="w-3/12 h-4/6 bg-white text-2xl leading-6">
        Szukaj
        <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 pl-1" />
      </div> */}
      <input
        type="text"
        name="search"
        placeholder="Szukaj"
        value={value}
        onChange={handleChange}
        className="w-3/12 h-4/6 bg-white text-xl leading-6 text-center"
      />
      <div className="w-1/12 h-1/2 bg-white text-lg leading-5">Filtry▾</div>
    </div>
  );
};
export default SearchBar;
