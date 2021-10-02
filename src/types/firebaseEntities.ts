import "@firebase/firestore/dist/firestore/compat/index";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import { CoinName } from "./coins";

export interface FirebaseTransactionData {
  amount: number;
  confirmDate: Timestamp;
  currencyName: CoinName;
  exchangeTransactionId: string;
  fee: number;
  paymentMethod: "credit-card" | "wire-transfer";
  type: "deposit" | "withdrawal";
  userId: number;
}

export interface FirebaseTradeData {
  confirmDate: Timestamp;
  initialCurrencyName: CoinName;
  destinationCurrencyName: CoinName;
  initialCurrencySpentAmount: number;
  destinationCurrencyPrice: number;
  destinationCurrencyFilledAmount: number;
  destinationCurrencyFeePaid: number;
  exchangeTradeId: string;
  type: ;
  userId: number;
  currencyPair: `${CoinName}-${CoinName}`;
}
