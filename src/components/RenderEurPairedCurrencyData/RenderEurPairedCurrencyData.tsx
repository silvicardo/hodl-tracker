import React, { ReactNode } from "react";
import { CoinName } from "../../types";
import { useCurrencyPairTrades } from "../../hooks";

export interface IRenderEurPairedCurrencyDataProps {
  currencyName: Exclude<CoinName, "EUR">;
  currencyEurActualPrice: number;
  children: (tradeData: ReturnType<typeof useCurrencyPairTrades>) => ReactNode;
}

export const RenderEurPairedCurrencyData = ({
  currencyName,
  currencyEurActualPrice,
  children,
}: IRenderEurPairedCurrencyDataProps) => {
  const currencyTradesData = useCurrencyPairTrades(`${currencyName}-EUR`, currencyEurActualPrice);
  return <>{children(currencyTradesData)}</>;
};
