import { http } from "../client";
import { TraitsResponse } from "./types";

export async function getTraits(collectionId: string) {
  const response = await http.get<TraitsResponse>(
    `/collections/${collectionId}/traits`
  );
  return response.data;
}
