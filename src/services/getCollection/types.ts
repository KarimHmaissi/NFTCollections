export interface Collection {
  result: {
    id: string;
    chain: "eth";
    contract: string;
    name: string;
    thumbnail: string;
    coverImage: string;
    brand: {
      id: number;
      name: string;
    };
    mintPrice: string;
    mintedAt: string;
    creatorsFee: 500;
    verified: true;
    spam: false;
    stats: {
      items: number;
      owners: number;
      floorPrice: string;
      floorPriceDelta: number;
      volume24h: string;
      volume24hDelta: number;
    };
  };
  ts: number;
}
