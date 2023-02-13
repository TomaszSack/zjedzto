import { useCart } from "components/context/CartService";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState();
    const {setSorting} = useCart()

    const handleChange = (e:any) => {
        e.preventDefault();
        setValue(e.target.value)
    }

  return (
    <div className="flex justify-around items-center w-full bg-tertiary-orange h-11  my-8 lg:my-20 rounded-t-xl text-center">
      {/* <div className="w-1/12 h-1/2 bg-white text-lg leading-5 shadow">Sortuj▾</div> */}
      <select
        className="text-center shadow w-3/12 lg:w-1/12 text-sm lg:text-lg"
        name="cars"
        id="cars"
        onChange={(e) => setSorting(e.target.value)}
      >
        <option value="#">Sortuj▾</option>
        <option value="name-asc">Nazwa rosnąco</option>
        <option value="name-desc">Nazwa malejąco</option>
        <option value="price-asc">Cena rosnąco</option>
        <option value="price-desc">Cena malejąco</option>
      </select>
      <input
        type="text"
        name="search"
        placeholder="Szukaj"
        value={value}
        onChange={handleChange}
        className="w-4/12 lg:w-3/12 h-4/6 bg-white text-xl leading-6 text-center shadow-lg"
      />
      <div className="w-3/12 lg:w-1/12 bg-white text-sm lg:text-lg shadow">
        Filtry▾
      </div>
    </div>
  );
};
export default SearchBar;
