import { Collection } from "../types";

export const collectionMock: Collection = {
  result: {
    id: "eth:0x123",
    chain: "eth",
    contract: "0x123",
    name: "Azuki Test",
    thumbnail:
      "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?w=500&auto=format",
    coverImage:
      "https://i.seadn.io/gae/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A?w=2400&auto=format",
    brand: {
      id: 1,
      name: "Test Labs",
    },
    mintPrice: "80000000000000000",
    mintedAt: "2022-02-14T14:00:00.000Z",
    creatorsFee: 500,
    verified: true,
    spam: false,
    stats: {
      items: 10000,
      owners: 3456,
      floorPrice: "127900000000000000",
      floorPriceDelta: 0.56,
      volume24h: "574300000000000000",
      volume24hDelta: 2.93,
    },
  },
  ts: 1685632336948,
};
