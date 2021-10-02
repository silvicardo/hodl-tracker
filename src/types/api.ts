import { Coin, CoinName } from "./coins";
import { MOrder } from "./order";

export type ExchangeCoinsApiResponse = { [K in CoinName]: Coin };

export type OrdersApiResponse = {
  status: string;
  message: string;
  data: {
    pageInfo: {
      currentPage: number;
      pageSize: number;
      totalRows: number;
    };
    rows: MOrder[];
  };
};
