import { useEffect } from "react";
import useSWR from "swr";
import { ExchangeCoinsApiResponse } from "../../types";
import { queryParams } from "../../utils";
import { TradeApiQueryParams } from "../../types/internalApis";
import { FirebaseTradeData } from "../../types/firebaseEntities";

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export function useTradesByParams(params: TradeApiQueryParams) {
  const { data, error } = useSWR<FirebaseTradeData[]>(`/api/trades${queryParams(params)}`, fetcher);

  return {
    data,
    isLoading: !data,
    error,
  };
}
