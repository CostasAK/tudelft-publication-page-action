import { useQuery } from "@tanstack/react-query";
import Cite from "citation-js";

export const useTitle = () => {
  const { data, isLoading } = useQuery({ queryKey: ["bib"] });

  const title = !isLoading && new Cite(data).get()?.[0]?.title;

  return (!isLoading && title) || import.meta.env.VITE_APP_NAME;
};
