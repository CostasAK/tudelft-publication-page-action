import clsx from "clsx";

export const Header = () => (
  <header
    className={clsx("py-12", "px-8", "bg-cyan", "font-serif", "text-white")}
  >
    <h1>{import.meta.env.VITE_APP_NAME}</h1>
  </header>
);
