import { useState } from "react";
import useSWR from "swr";
import client from "../api/client";

const productsQuery = `
  query Products($first: Int = 9) {
  products(first: $first) {
    id
    category
    name
    image {
      url
      height
      width
    }
  }
}
`;

const useProducts = () => {
  const [first, setFirst] = useState(9);

  const { data, error } = useSWR(
    [productsQuery, first],
    (query, qty) => client.request(query, { first: qty }),
  );

  const getNext = (next) => {
    setFirst((curr) => curr + next);
  };

  return {
    data,
    error,
    pending: !data && !error,
    getNext,
  };
};

export default useProducts;
