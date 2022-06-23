import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetchAPI } from "./api";

export function useSerachResult(query: any, offset: any, limit: any) {
  const { data } = useSWR(
    () => "/search?q=" + query + "&limit=" + limit + "&offset=" + offset,
    fetchAPI
  );
  console.log("222", limit);

  return data;
}

// export function useMe() {
//   //   const { data } = useSWR("/me",fetchAPI);
//   //   return data;
// }

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);

  return data;
}

export function useMe2() {
  const { data } = useSWR("/me2", () => "hola");
  return data;
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
