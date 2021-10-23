export interface MOrder {
  orderId: number;
  volume: number;
  rate: number;
  trade: string;
  market: string;
  amount: number;
  serviceCharge: number;
  date: string;
  side: string;
}

export interface YoungPlatformOrder {
  isProOrder: boolean;
  orderId: number;
  date: string;
  currencyPair: string;
  side: "BUY" | "SELL";
  tradeType: string;
  tradePrice: string;
  averagePrice: string;
  size: string;
  filled: string;
  feePaid: string;
  totalExecutedValue: string;
  stopPrice: string;
  orderStatus: string;
  mOrders: MOrder[];
}

export interface YoungPlatformOrderResponse {
  message: string;
  status: string;
  data: {
    pageInfo: {
      currentPage: number;
      pageSize: number;
      totalRows: number;
    };
    rows: YoungPlatformOrder[];
  };
}
