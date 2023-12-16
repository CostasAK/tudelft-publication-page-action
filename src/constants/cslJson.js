import Cite from "citation-js";
// eslint-disable-next-line import/no-unresolved
import testBib from "../assets/test.bib?raw";

export const cslJson = new Cite(testBib).get()?.[0];
