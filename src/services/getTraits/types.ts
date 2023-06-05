export interface Trait {
  value: string;
  count: number;
  traitFloor: {
    price: string;
    marketplace: string;
  };
  topOffer: {
    price: string;
    marketplace: string;
  };
  thumbnail: string;
}

export interface TraitsResponse {
  results: {
    [key: string]: Trait[];
    Background: Trait[];
    Foreground: Trait[];
    Special: Trait[];
  };
  ts: number;
}
