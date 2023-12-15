import axios from "axios";
import testBib from "../assets/test.bib";

export const defaultAxios = axios.create({ baseUrl: "" });

export const defaultQueryFn = async ({ queryKey }) => {
  if (queryKey[0] === "bib") {
    const { data } = await defaultAxios({ url: testBib });
    return data;
  }
  return undefined;
};
