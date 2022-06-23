/* eslint-disable no-undef */
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence } from "framer-motion";
import useProducts from "../hooks/useProducts";
import GalleryCard from "./GalleryCard";
import Select from "./Select";
import Tabs from "./Tabs";

const Gallery = () => {
  const [selectedOption, setSelectedOption] = useState("showAll");
  const [localData, setLocalData] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [deletedIds, setDeletedIds] = useState([]);

  const {
    data,
    pending,
    error,
    getNext,
  } = useProducts();

  const categories = useMemo(() => {
    if (data) {
      const values = data.products?.map((product) => product.category);

      return [...new Set(values)];
    }

    return [];
  }, [data]);

  useEffect(() => {
    if (data) setLocalData(data.products);
  }, [data]);

  useEffect(() => {
    const deleteCard = (ev) => {
      if (window.matchMedia("(max-width: 1040px)").matches) return;

      if (ev.key === "Delete" && selectedCardId) {
        setDeletedIds((curr) => [...curr, selectedCardId]);
      }
    };

    window.addEventListener("keydown", deleteCard);

    return () => {
      window.removeEventListener("keydown", deleteCard);
    };
  }, [selectedCardId]);

  const filterLocalData = (value) => setSelectedOption(value);

  const displayedProducts = useMemo(() => localData
    ?.filter((product) => {
      const isDeleted = deletedIds.includes(product.id);

      if (selectedOption === "showAll") return product && !isDeleted;

      return (product.category === selectedOption) && !isDeleted;
    })
    .map((option) => (
      <GalleryCard
        selected={selectedCardId === option.id}
        id={option.id}
        key={option.id}
        name={option.name}
        category={option.category}
        image={option.image}
        onClick={(param) => {
          if (param === option.id) {
            return setSelectedCardId(selectedCardId === option.id ? null : param);
          }

          return filterLocalData(param);
        }}
      />
    )), [deletedIds, localData, selectedCardId, selectedOption]);

  if (error) return <div className="h-[350px] flex justify-center items-center">Error...</div>;

  return (
    <>
      <div className="[&>*:nth-child(1)]:hidden [&>*:nth-child(1)]:[@media(max-width:1040px)]:block [&>*:nth-child(2)]:flex [&>*:nth-child(2)]:[@media(max-width:1040px)]:hidden flex justify-center">
        <Select
          selected={selectedOption}
          options={categories}
          onSelectionChange={filterLocalData}
        />
        <Tabs
          selected={selectedOption}
          options={categories}
          onSelectionChange={filterLocalData}
        />
      </div>
      <div className="grid lg:grid-cols-3 [@media(max-width:1040px)]:grid-cols-1 py-20 [@media(max-width:1040px)]:py-10 gap-4">
        <AnimatePresence>
          {displayedProducts}
        </AnimatePresence>
      </div>
      {localData?.length === 18 || (
      <div className="flex justify-center">
        <button
          className="rounded bg-white py-2 px-6 shadow-md"
          type="button"
          onClick={() => getNext(9)}
        >
          {pending ? "LOADING..." : "LOAD MORE"}
        </button>
      </div>
      )}
    </>
  );
};

export default Gallery;
