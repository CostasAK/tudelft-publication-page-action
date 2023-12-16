import clsx from "clsx";
import PropTypes from "prop-types";

const SubSectionHeading = ({ children }) => {
  if (!children) return null;

  return <h3 className={clsx("font-serif", "text-xl", "mb-2")}>{children}</h3>;
};

SubSectionHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const SubSection = ({ heading, children }) => {
  if (!children) return null;

  return (
    <section className={clsx("my-3")}>
      <SubSectionHeading>{heading}</SubSectionHeading>
      <div>{children}</div>
    </section>
  );
};

SubSection.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
