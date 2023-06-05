import { QueryClient, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getTraits } from "./getTraits";
import { TraitsResponse } from "./types";

export const prefetchTraits = async (collectionId: string) => {
  const queryKey = ["traits", collectionId];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKey, () => getTraits(collectionId));
};

export const useGetTraits = (
  collectionId: string,
  queryOptions?: UseQueryOptions<any, any, TraitsResponse> // TODO - remove any type here
) => {
  const queryKey = ["traits", collectionId];

  return useQuery({
    queryKey,
    queryFn: () => getTraits(collectionId),
    refetchOnMount: false,
    staleTime: 1000 * 1000,
    refetchOnWindowFocus: false,
    ...queryOptions,
  });
};
