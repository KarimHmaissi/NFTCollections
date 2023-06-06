import { QueryClient, useQuery } from "@tanstack/react-query";
import {
  convertToPercentage,
  formatDate,
  formatEtherValue,
} from "nftCollections/utils";
import { getCollection } from "./getCollection";
import { Collection } from "./types";

export const prefetchCollection = async (collectionId: string) => {
  const queryKey = ["collection", collectionId];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKey, () => getCollection(collectionId));

  return queryClient;
};

export const useGetCollection = <T>(
  collectionId: string,
  select?: (collection: Collection) => T
) => {
  const queryKey = ["collection", collectionId];

  return useQuery({
    queryKey,
    queryFn: () => getCollection(collectionId),
    select,
    staleTime: 1000 * 600,
    refetchInterval: 1000 * 30,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

interface CollectionDetails {
  name: string;
  thumbnail: string;
  verified: boolean;
  brandName: string;
  mintedAt: string;
}

export const useGetCollectionDetails = (collectionId: string) =>
  useGetCollection<CollectionDetails>(collectionId, (data) => ({
    name: data.result.name,
    thumbnail: data.result.thumbnail,
    verified: data.result.verified,
    brandName: data.result.brand.name,
    mintedAt: formatDate(data.result.mintedAt),
  }));

interface CollectionData {
  floorPrice: string;
  floorPriceDelta: string;
  volume24h: string;
  volume24hDelta: string;
  marketCap: string;
}

export const useGetCollectionData = (collectionId: string) =>
  useGetCollection<CollectionData>(collectionId, (data) => ({
    floorPrice: formatEtherValue(data.result.stats.floorPrice),
    floorPriceDelta: convertToPercentage(data.result.stats.floorPriceDelta),
    volume24h: formatEtherValue(data.result.stats.volume24h),
    volume24hDelta: convertToPercentage(data.result.stats.volume24hDelta),
    marketCap: formatEtherValue(
      data.result.stats.floorPrice,
      data.result.stats.items
    ),
  }));

interface CollectionSeo {
  name: string;
}

export const useGetCollectionSeo = (collectionId: string) =>
  useGetCollection<CollectionSeo>(collectionId, (data) => ({
    name: data.result.name,
  }));
