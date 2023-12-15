import clsx from "clsx";

export const Header = () => (
  <header className={clsx("py-12", "px-8", "bg-cyan")}>
    <h1 className={clsx("font-serif", "text-white", "text-5xl", "text-center")}>
      {import.meta.env.VITE_APP_NAME}
    </h1>
  </header>
);
