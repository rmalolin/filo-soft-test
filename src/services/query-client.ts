import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6000 * 10,
      refetchOnWindowFocus: false
    }
  }
});
