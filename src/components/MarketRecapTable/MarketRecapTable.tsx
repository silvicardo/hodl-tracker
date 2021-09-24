import React from "react";
import { CoinName, ExchangeCoinsApiResponse } from "../../types";
import { useExchangeCurrenciesCurrentValues } from "../../hooks";
import { GenericTable } from "../GenericTable";
import { CRIPTO_SYMBOLS } from "../../constants";

export interface IMarketRecapTableProps {
  data: ExchangeCoinsApiResponse;
  filteredSymbols?: CoinName[];
}

export const MarketRecapTable = ({ data, filteredSymbols = CRIPTO_SYMBOLS }: IMarketRecapTableProps) => {
  const tableData = useExchangeCurrenciesCurrentValues(data, filteredSymbols);
  return <GenericTable data={tableData} displayedKeysNames={["symbol", "price"]} />;
};
