import { Coin, CoinName } from "./coins";

export type ExchangeCoinsApiResponse = { [K in CoinName]: Coin };
