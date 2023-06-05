import { QueryClient, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getCollection } from "./getCollection";
import { Collection } from "./types";

export const prefetchCollection = async (collectionId: string) => {
  const queryKey = ["collection", collectionId];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKey, () => getCollection(collectionId));

  return queryClient;
};

export const useGetCollection = (
  collectionId: string,
  queryOptions?: UseQueryOptions<any, any, Collection> // TODO - remove any type here
) => {
  const queryKey = ["collection", collectionId];

  return useQuery({
    queryKey,
    queryFn: () => getCollection(collectionId),
    staleTime: 1000 * 30,
    refetchInterval: 1000 * 30,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    ...queryOptions,
  });
};
