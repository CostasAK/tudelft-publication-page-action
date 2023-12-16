import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";

export const RenderWrapper = ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

RenderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
