import clsx from "clsx";
import { CopyBlock, xt256 } from "react-code-blocks";
import { Section } from "../components/Section";
import { bibString } from "../constants/bibString";
import { cslJson } from "../constants/cslJson";
import { titleCase } from "../utils/titleCase";

export const Main = () => {
  console.log(cslJson);
  return (
    <main className="w-full max-w-xl py-12 px-4 mx-auto">
      <Section heading="Abstract">{cslJson.abstract}</Section>
      <Section heading="Keywords">
        {titleCase(cslJson.keyword.replace(/\s*,\s*/gi, ", "))}
      </Section>
      <Section
        heading={cslJson.type.includes("conference") ? "Conference" : "Journal"}
      >
        {cslJson["container-title"]}
        <div
          className={clsx(
            "flex",
            "flex-row",
            "flex-wrap",
            "justify-stretch",
            "w-full",
            "my-3",
            "gap-y-2",
          )}
        >
          <div className={clsx("flex-auto", "mr-4")}>
            <b>Date</b>{" "}
            {cslJson.issued["date-parts"][0]
              .map((x) => String(x).padStart(2, "0"))
              .join("-")}
          </div>
          <div className={clsx("flex-auto", "mr-4")}>
            <b>Pages</b> {cslJson.page}
          </div>
        </div>
      </Section>
      <Section heading="DOI">{cslJson.DOI}</Section>
      <Section heading="Bib Entry">
        Please use the following bib entry to cite this work.
        <br />
        <div className={clsx("text-sm", "font-code")}>
          <CopyBlock
            text={bibString.replace(/\n$/, "")}
            codeBlock
            wrapLongLines
            language="latex"
            showLineNumbers={false}
            theme={xt256}
          />
        </div>
      </Section>
    </main>
  );
};
