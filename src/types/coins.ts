export interface Descriptions {
  en: string;
  it: string;
}

export interface CoinDetails {
  whitepaper: string;
  website: string;
  max_supply: number;
  current_supply: number;
  market_cap: number;
  volume_24h: number;
  descriptions: Descriptions;
}

export interface CoinCategory {
  name: string;
  priority: number;
}

export type CoinName =
  | "1INCH"
  | "AAVE"
  | "ADA"
  | "BAT"
  | "BCH"
  | "BTC"
  | "CHZ"
  | "COMP"
  | "CRV"
  | "DAI"
  | "DASH"
  | "DOGE"
  | "DOT"
  | "EOS"
  | "ETH"
  | "EUR"
  | "GBP"
  | "GNO"
  | "KNC"
  | "LINK"
  | "LTC"
  | "LUNA"
  | "LYNG"
  | "MKR"
  | "OMG"
  | "OXT"
  | "PAXG"
  | "QDT"
  | "REPV2"
  | "SAND"
  | "SIL"
  | "SNX"
  | "STORJ"
  | "SUSHI"
  | "TRX"
  | "UNI"
  | "USD"
  | "USDC"
  | "USDT"
  | "XLM"
  | "XRP"
  | "XTZ"
  | "YFI"
  | "YNG";

export interface Coin {
  symbol: string;
  color: string;
  name: CoinName;
  image: string;
  image_light: string;
  price: number;
  character: string;
  basic: boolean;
  pro: boolean;
  coin_details: CoinDetails;
  locked: boolean;
  is_stable: boolean;
  network: string;
  regex: string;
  category: CoinCategory;
}
