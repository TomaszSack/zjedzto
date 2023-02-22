import ContentContainer from "layout/ContentContainer";
import Button from "components/Button";
import ProductsList from "./ProductsList";
import SearchBar from "./SearchBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface Products {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
}

const MenuSection = () => {
  const storageSorting = localStorage.getItem("sorting");
  const initialSorting = storageSorting
    ? JSON.parse(storageSorting)
    : "name-asc";
  const [data, setData] = useState<Products[]>([]);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState(initialSorting);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("sorting", JSON.stringify(sorting));
  }, [sorting]);

  const sortingFunc = (sorting: string) => {
    switch (sorting) {
      case "name-asc":
        return "?_sort=name&_order=asc";
      case "name-desc":
        return "?_sort=name&_order=desc";
      case "price-asc":
        return "?_sort=price&_order=asc";
      case "price-desc":
        return "?_sort=price&_order=desc";
      default:
        return "";
    }
  };

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const data = await (
          await fetch(
            `http://localhost:3000/menu${sortingFunc(sorting)}&q=${search}`
          )
        ).json();
        setIsLoading(false);
        setData(data);
      };
      dataFetch();
    } catch (error: unknown) {
      console.error(error);
    }
  }, [sorting, search]);

  return (
    <div id="menu" className="h-auto bg-primary-white pb-20">
      <ContentContainer>
        <SearchBar
          search={search}
          setSearch={setSearch}
          sorting={sorting}
          setSorting={setSorting}
        />
        <ProductsList data={data} isLoading={isLoading} />
        <div className="flex justify-center pt-12">
          <Button href="/order">
            Zamawiam
            <FontAwesomeIcon
              className="pl-2 text-white"
              icon={faCartShopping}
            />
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};
export default MenuSection;
