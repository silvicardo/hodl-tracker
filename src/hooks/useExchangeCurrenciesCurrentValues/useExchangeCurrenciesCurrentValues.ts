import { CoinName, ExchangeCoinsApiResponse } from "../../types";
import { useMemo } from "react";

export function useExchangeCurrenciesCurrentValues(apiData: ExchangeCoinsApiResponse, filteredSymbols?: CoinName[]) {
  return useMemo(() => {
    const coinNamesToShow = filteredSymbols
      ? filteredSymbols.filter((symbol) => apiData.hasOwnProperty(symbol))
      : (Object.keys(apiData) as CoinName[]);
    return coinNamesToShow.map((currencySlug) => ({
      name: apiData[currencySlug].name,
      price: `${apiData[currencySlug].price} €`,
      image: apiData[currencySlug].image,
      symbol: apiData[currencySlug].symbol,
      categoryName: apiData[currencySlug].category.name,
    }));
  }, [apiData]);
}
