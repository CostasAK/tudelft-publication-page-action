import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "../utils/queryClient";

export const RenderWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>{children}</HelmetProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

RenderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
