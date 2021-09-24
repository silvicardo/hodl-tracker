import useSWR from "swr";
import { ExchangeCoinsApiResponse } from "../../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const EXCHANGE_URL = "https://europe-west1-youngplatform-exchange.cloudfunctions.net/exchange-coins";

export function useExchangeCurrencies(refreshInterval?: number) {
  const { data, error } = useSWR<ExchangeCoinsApiResponse>(EXCHANGE_URL, fetcher, {
    refreshInterval: refreshInterval || 10000,
  });

  return { data: data ?? ({} as ExchangeCoinsApiResponse), isLoading: !data, error };
}
