// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import firebase from "../../../firebase/initFirebase";
import { FirebaseTradeData } from "../../types/firebaseEntities";
import { transformYoungOrdersResponseToDbTrades } from "../../utils";
import { YoungPlatformOrderResponse } from "../../types";

function getQuerySnapshotByParameters({
  initialCurrencyName,
  destinationCurrencyName,
}: Partial<Pick<FirebaseTradeData, "initialCurrencyName" | "destinationCurrencyName">>) {
  if (initialCurrencyName && destinationCurrencyName) {
    return firebase
      .firestore()
      .collection("trades")
      .where("initialCurrencyName", "==", initialCurrencyName)
      .where("destinationCurrencyName", "==", destinationCurrencyName)
      .get();
  }
  if (initialCurrencyName) {
    return firebase.firestore().collection("trades").where("initialCurrencyName", "==", initialCurrencyName).get();
  }

  if (destinationCurrencyName) {
    return firebase
      .firestore()
      .collection("trades")
      .where("destinationCurrencyName", "==", destinationCurrencyName)
      .get();
  }
  return firebase.firestore().collection("trades").get();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<FirebaseTradeData[]>) {
  console.log("entered handler");
  if (req.method === "GET") {
    console.log("entered handler GET");
    try {
      const querySnapshot = await getQuerySnapshotByParameters(req.query);
      const readableData: FirebaseTradeData[] = [];
      querySnapshot.forEach((doc) => {
        readableData.push(doc.data() as FirebaseTradeData);
      });
      return res.status(200).json(readableData);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json([]);
    }
  }
}
