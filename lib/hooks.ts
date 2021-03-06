import { useState, useEffect } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

import { fetchAPI } from "./api";
import { getSaveToken } from "./api";

export function useSerachResult(query: any) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, [query]);

  const { data, error, isValidating } = useSWRImmutable(
    () => "/search?q=" + query + "&limit=4&offset=" + offset,
    fetchAPI
  );

  return { data, isValidating, offset, setOffset };
}

export function useMe() {
  const token = getSaveToken();
  const { data, error } = useSWR(token ? "/me" : null, fetchAPI);

  return { data };
}

export function useProduct(id: string) {
  const { data, error } = useSWR("/products/" + id, fetchAPI);
  // const { data, error } = useSWRImmutable("/products/" + id, fetchAPI);

  return data;
}

export function useFeaturedProducts() {
  const { data, error } = useSWR("/search?q=&limit=3&offset=10", fetchAPI);
  // const { data, error } = useSWRImmutable("/products/" + id, fetchAPI);

  return data;
}
