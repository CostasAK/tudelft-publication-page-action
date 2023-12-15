import { QueryClient } from "@tanstack/react-query";
import { minute, second, week } from "../constants/time";
import { defaultQueryFn } from "./query";

const CACHE_MAX_AGE = 3 * week;

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: CACHE_MAX_AGE,
      staleTime: 5 * second,
      queryFn: defaultQueryFn,
      retry: true,
      retryDelay: (attemptIndex) =>
        attemptIndex < 6
          ? Math.min(
              Math.ceil(second * (2 ** attemptIndex + Math.random())),
              minute,
            )
          : minute,
      refetchInterval: 30 * second,
    },
  },
});
