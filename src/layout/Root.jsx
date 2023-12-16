import clsx from "clsx";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Root = () => {
  return (
    <div
      id="root"
      className={clsx(
        "grid",
        "grid-cols-1",
        "grid-rows-[auto_1fr_auto]",
        "min-h-[100dvh]",
      )}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
