import { http } from "../client";
import { Collection } from "./types";

export async function getCollection(collectionId: string) {
  const response = await http.get<Collection>(`/collections/${collectionId}`);
  return response.data;
}
