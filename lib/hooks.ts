import useSWR from "swr";
import { fetchAPI } from "./api";

export function useSerachResult(query: any) {
  //   const { data } = useSWR(() => "/search?q=" + query,fetchAPI);
  //   return data;
}

export function useMe() {
  //   const { data } = useSWR("/me",fetchAPI);
  //   return data;
}

export function useMe2() {
  const { data } = useSWR("/me2", () => "hola");
  return data;
}
