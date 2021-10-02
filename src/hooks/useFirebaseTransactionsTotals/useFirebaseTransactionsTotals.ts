import { FirebaseTransactionData } from "../../types/firebaseEntities";
import { useMemo } from "react";

export function useFirebaseTransactionsTotals(data: FirebaseTransactionData[]) {
  return useMemo(
    () =>
      data.reduce(
        (totalsAcc, nextTrans) => {
          totalsAcc[nextTrans.type].credit += +nextTrans.amount;
          totalsAcc[nextTrans.type].fees += +nextTrans.fee;
          return totalsAcc;
        },
        {
          deposit: {
            credit: 0,
            fees: 0,
          },
          withdrawal: {
            credit: 0,
            fees: 0,
          },
        }
      ),
    [data]
  );
}
