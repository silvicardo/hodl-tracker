import { FirebaseTransactionData } from "../../types/firebaseEntities";
import { useMemo } from "react";

export function useFirebaseTransactionsTotals(data: FirebaseTransactionData[]) {
  return useMemo(() => {
    const amounts = data.reduce(
      (totalsAcc, nextTrans) => {
        totalsAcc[nextTrans.type].credit.push(+nextTrans.amount);
        totalsAcc[nextTrans.type].fees.push(+nextTrans.fee);
        return totalsAcc;
      },
      {
        deposit: {
          credit: [] as number[],
          fees: [] as number[],
        },
        withdrawal: {
          credit: [] as number[],
          fees: [] as number[],
        },
      }
    );

    return {
      deposit: {
        credit: amounts.deposit.credit.reduce((a, b) => a + b, 0),
        fees: amounts.deposit.fees.reduce((a, b) => a + b, 0),
      },
    };
  }, [data]);
}
