import { FirebaseTradeData } from "../../types/firebaseEntities";
import { CoinName } from "../../types";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../firebase/initFirebase";
import { useMemo } from "react";
import { getCurrencyPairAggregatedDataFromDbData } from "../../utils";

export function useCurrencyPairTrades(
  pair: `${CoinName}-${CoinName}`,
  destinationCurrencyValuePerUnitInInitialCurrency: number = 0
) {
  const [firebaseData, isDataLoading, fetchError] = useCollection<FirebaseTradeData>(
    firebase.firestore().collection("trades").where("currencyPair", "==", pair)
  );
  const data = useMemo(() => {
    let readableData: FirebaseTradeData[] = [];
    if (!isDataLoading && firebaseData) {
      readableData = firebaseData.docs.map((doc) => (doc.data() ? doc.data() : ({} as FirebaseTradeData)));
    }
    return readableData;
  }, [isDataLoading, firebaseData, fetchError]);

  const aggregatedData = useMemo(
    () => getCurrencyPairAggregatedDataFromDbData(data, destinationCurrencyValuePerUnitInInitialCurrency),
    [data, destinationCurrencyValuePerUnitInInitialCurrency]
  );
  return { data, aggregatedData, isDataLoading, fetchError };
}
