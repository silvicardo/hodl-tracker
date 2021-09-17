import "@firebase/firestore/dist/firestore/compat/index";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface FirebaseTransactionData {
  amount: number;
  confirmDate: Timestamp;
  currencyName: string;
  exchangeTransactionId: string;
  fee: number;
  type: string;
  userId: number;
}
