import clsx from "clsx";
import { Helmet } from "react-helmet-async";
import { cslJson } from "../constants/cslJson";

export const Header = () => {
  const title = cslJson.title;
  return (
    <header
      className={clsx("py-12", "px-8", "bg-cyan", "text-white", "text-center")}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1 className={clsx("font-serif", "text-5xl")}>{title}</h1>
      <div
        className={clsx(
          "text-xl",
          "flex",
          "flex-row",
          "flex-wrap",
          "justify-around",
          "mt-6",
          "gap-12",
        )}
      >
        {cslJson.author.map((author, i) => (
          <div key={i}>
            {author.given} {author.family}
          </div>
        ))}
      </div>
    </header>
  );
};
