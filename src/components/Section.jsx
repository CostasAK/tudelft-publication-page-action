import clsx from "clsx";
import PropTypes from "prop-types";

const SectionHeading = ({ children }) => {
  if (!children) return null;

  return (
    <h2
      className={clsx(
        "font-serif",
        "text-[1.9375rem]",
        "leading-[1.3]",
        "mb-4",
      )}
    >
      {children}
    </h2>
  );
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
    <section>
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
