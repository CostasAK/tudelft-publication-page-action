import PropTypes from "prop-types";

const SectionHeading = ({ children }) => {
  if (!children) return null;

  return <h2>{children}</h2>;
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
