export interface MOrder {
  orderId: number;
  volume: number;
  rate: number;
  trade: string;
  market: string;
  amount: number;
  serviceCharge: number;
  date: Date;
  side: string;
}

export interface YoungPlatformOrder {
  isProOrder: boolean;
  orderId: number;
  date: Date;
  currencyPair: string;
  side: string;
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
