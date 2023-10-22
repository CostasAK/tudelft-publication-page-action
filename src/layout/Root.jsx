import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import clsx from "clsx";

export const Root = () => {
  return (
    <div
      id="root"
      className={clsx(
        "grid",
        "grid-cols-1",
        "grid-rows-[auto_1fr_auto]",
        "min-h-[100dvh]",
        "font-sans",
        "leading-relaxed",
      )}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
