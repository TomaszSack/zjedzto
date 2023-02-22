const SearchBar: React.FC<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sorting: string;
  setSorting: React.Dispatch<React.SetStateAction<string>>;
}> = ({ search, setSearch, sorting, setSorting }) => {

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-around items-center w-full bg-tertiary-orange h-11  my-8 lg:my-20 rounded-t-xl text-center">
      <select
        className="text-center shadow w-3/12 lg:w-2/12 text-sm lg:text-base"
        name="cars"
        id="cars"
        onChange={(e) => setSorting(e.target.value)}
        defaultValue={sorting}
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
        value={search}
        onChange={handleChange}
        className="w-4/12 lg:w-3/12 h-4/6 bg-white text-xl leading-6 text-center shadow-lg"
      />
      <div className="w-3/12 lg:w-2/12 bg-white text-sm lg:text-base shadow">
        Filtry▾
      </div>
    </div>
  );
};
export default SearchBar;
