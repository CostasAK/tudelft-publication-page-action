import clsx from "clsx";
import PropTypes from "prop-types";

const SectionHeading = ({ children }) => {
  if (!children) return null;

  return <h2 className={clsx("font-serif", "text-3xl", "mb-4")}>{children}</h2>;
};

SectionHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const Section = ({ heading, children }) => {
  if (!children) return null;

  return (
    <section className={clsx("mb-6")}>
      <SectionHeading>{heading}</SectionHeading>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
