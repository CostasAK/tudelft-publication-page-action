import clsx from "clsx";
import { Helmet } from "react-helmet-async";
import { useTitle } from "../hooks/useTitle";

export const Header = () => {
  const title = useTitle();
  return (
    <header className={clsx("py-12", "px-8", "bg-cyan")}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1
        className={clsx(
          "font-serif",
          "text-white",
          "text-5xl",
          "text-center",
          "leading-tight",
        )}
      >
        {title}
      </h1>
    </header>
  );
};
