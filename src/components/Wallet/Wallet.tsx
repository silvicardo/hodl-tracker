import React from "react";
import useSWR from "swr";
import { ExchangeCoinsApiResponse } from "types";

export interface IWalletProps {}
const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export const Wallet = ({}: IWalletProps) => {
  const { data, error } = useSWR<ExchangeCoinsApiResponse>(
    `https://europe-west1-youngplatform-exchange.cloudfunctions.net/exchange-coins`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>Wallet</div>;
};
