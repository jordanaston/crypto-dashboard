export interface CryptoData {
  id: number;
  logo?: string;
  name: string;
  symbol: string;
  cmc_rank?: number;

  quote?: {
    USD: {
      price: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      fully_diluted_market_cap: number;
    };
  };
}

export interface CryptoInfoResponse {
  data: {
    [cryptoId: number]: {
      logo: string;
    };
  };
}
