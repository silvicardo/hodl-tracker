import { FirebaseTradeData } from "./firebaseEntities";

export type TradeApiQueryParams = Partial<Pick<FirebaseTradeData, "initialCurrencyName" | "destinationCurrencyName">>;
