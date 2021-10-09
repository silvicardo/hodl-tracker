import { FirebaseTradeData, FirebaseTransactionData } from "./types/firebaseEntities";
import { CoinName, YoungPlatformOrder } from "./types";
import { YoungPlatformDeposit, YoungPlatformDepositsResponse } from "./types/youngPlatformDepositsResponse";

export function queryParams<K extends object>(params: K) {
  return (
    "?" +
    Object.entries(params)
      .filter(([, value]) => typeof value !== "undefined")
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
}

//**** DEPOSITS ***** //

const exampleDeposit: YoungPlatformDeposit = {
  id: 40428,
  requestDate: "2021-09-20T12:42:28.48Z",
  requestAmount: 150,
  transactionID: "4d02dbf1-d26b-4740-9a5a-c77bfcdb9c4e",
  rejectReason: null,
  comments: '{"card_id":9801,"fees":3.55000000,"response_code":null}',
  status: "Failed",
  approvedDate: "2021-09-20T18:20:00.95Z",
  type: "Card",
  pg_name: "Checkout",
};

type StorableDepositData = Omit<FirebaseTransactionData, "confirmDate"> & { confirmDate: string };

//user id metti sempre 1
const exampleDepositResult: StorableDepositData = {
  amount: 150,
  confirmDate: new Date("2021-09-20T18:20:00.95Z").toLocaleString(),
  currencyName: "EUR",
  exchangeTransactionId: "4d02dbf1-d26b-4740-9a5a-c77bfcdb9c4e",
  fee: 3.55,
  paymentMethod: "credit-card", //"credit-card" | "wire-transfer";
  type: "deposit",
  userId: 1,
};

export function transformExchangeDepositToDbTransaction(deposit: YoungPlatformDeposit): StorableDepositData {}

//export function transformExchangeOrderToDbTrades(order: YoungPlatformOrder): FirebaseTradeData {}

export const youngDepositsResponse: YoungPlatformDepositsResponse = {
  status: "Success",
  message: "Success!",
  data: [
    {
      id: 25936,
      requestDate: "2021-10-04T07:45:10.463Z",
      requestAmount: 1500,
      transactionID: "349525120",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-10-04T07:45:10.463Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 25545,
      requestDate: "2021-09-29T07:52:50.55Z",
      requestAmount: 200,
      transactionID: "348813652",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-09-29T07:52:50.55Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 25525,
      requestDate: "2021-09-29T07:32:52.88Z",
      requestAmount: 300,
      transactionID: "348813405",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-09-29T07:32:52.88Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 41513,
      requestDate: "2021-09-24T11:19:24.187Z",
      requestAmount: 250,
      transactionID: "052c47d3-8fc2-4632-8d9b-443f56bfcb1e",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":5.75000000,"response_code":null}',
      status: "Success",
      approvedDate: "2021-09-24T11:19:58.17Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 25022,
      requestDate: "2021-09-24T07:55:00.273Z",
      requestAmount: 100,
      transactionID: "348136444",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-09-24T07:55:00.273Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 40446,
      requestDate: "2021-09-20T12:58:33.167Z",
      requestAmount: 160,
      transactionID: "91c2383d-b29f-47a0-aac1-84690defef4f",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":3.77000000,"response_code":null}',
      status: "Success",
      approvedDate: "2021-09-20T12:59:11.09Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 40443,
      requestDate: "2021-09-20T12:53:42.527Z",
      requestAmount: 50,
      transactionID: "ee3bb02b-921b-4958-be03-4aef8e31f8f3",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":1.35000000,"response_code":null}',
      status: "Failed",
      approvedDate: "2021-09-20T18:20:00.95Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 40428,
      requestDate: "2021-09-20T12:42:28.48Z",
      requestAmount: 150,
      transactionID: "4d02dbf1-d26b-4740-9a5a-c77bfcdb9c4e",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":3.55000000,"response_code":null}',
      status: "Failed",
      approvedDate: "2021-09-20T18:20:00.95Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 40427,
      requestDate: "2021-09-20T12:42:22.093Z",
      requestAmount: 160,
      transactionID: "b0d75e80-cb29-40fe-8f7d-b1be94c60043",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":3.77000000,"response_code":null}',
      status: "Failed",
      approvedDate: "2021-09-20T18:20:00.95Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 40425,
      requestDate: "2021-09-20T12:41:33.353Z",
      requestAmount: 160,
      transactionID: "095f3318-85c8-4656-be02-ab25f0ac3191",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":3.77000000,"response_code":null}',
      status: "Failed",
      approvedDate: "2021-09-20T18:20:00.95Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 40424,
      requestDate: "2021-09-20T12:41:24.343Z",
      requestAmount: 160,
      transactionID: "c2f4dd8b-f811-4131-9461-77a568e7074d",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":3.77000000,"response_code":null}',
      status: "Failed",
      approvedDate: "2021-09-20T18:20:00.95Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 40294,
      requestDate: "2021-09-20T06:47:29.63Z",
      requestAmount: 200,
      transactionID: "feed8a61-0b57-4ac6-95de-b58e18334b7f",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":4.65000000,"response_code":null}',
      status: "Success",
      approvedDate: "2021-09-20T06:48:11.86Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 40291,
      requestDate: "2021-09-20T06:37:28.813Z",
      requestAmount: 200,
      transactionID: "717f29d8-0aef-4f2e-8726-8ded859b19a3",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":4.65000000,"response_code":null}',
      status: "Success",
      approvedDate: "2021-09-20T06:38:03.903Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 23949,
      requestDate: "2021-09-16T07:56:11.73Z",
      requestAmount: 250,
      transactionID: "346946961",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-09-16T07:56:11.73Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 39323,
      requestDate: "2021-09-15T07:25:23.353Z",
      requestAmount: 60,
      transactionID: "9d930008-1e72-45fc-9de1-249de3f3e0fd",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":1.57000000,"response_code":null}',
      status: "Success",
      approvedDate: "2021-09-15T07:26:00.193Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 22951,
      requestDate: "2021-09-09T09:13:47.4Z",
      requestAmount: 50,
      transactionID: "345787615",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-09-09T09:13:47.4Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 36974,
      requestDate: "2021-09-07T16:08:34.347Z",
      requestAmount: 50,
      transactionID: "c1830e56-e423-4a63-b9d2-3d0d99fbfb53",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":1.35000000,"response_code":null}',
      status: "Success",
      approvedDate: "2021-09-07T16:09:00.88Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 36964,
      requestDate: "2021-09-07T16:03:06.173Z",
      requestAmount: 25.5,
      transactionID: "92f542e3-2498-4522-b6af-29451e933197",
      rejectReason: null,
      comments: '{"card_id":11701,"fees":0.81000000,"response_code":null}',
      status: "Success",
      approvedDate: "2021-09-07T16:03:40.467Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 22030,
      requestDate: "2021-09-03T08:06:04.433Z",
      requestAmount: 50,
      transactionID: "344893568",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-09-03T08:06:04.433Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 21615,
      requestDate: "2021-08-31T08:01:10.057Z",
      requestAmount: 50,
      transactionID: "344300096",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-08-31T08:01:10.057Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 21078,
      requestDate: "2021-08-25T07:33:29.57Z",
      requestAmount: 50,
      transactionID: "343578511",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-08-25T07:33:29.57Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 20449,
      requestDate: "2021-08-18T07:41:09.787Z",
      requestAmount: 50,
      transactionID: "342779893",
      rejectReason: null,
      comments: "",
      status: "Approved",
      approvedDate: "2021-08-18T07:41:09.787Z",
      type: "Bank",
      pg_name: "",
    },
    {
      id: 30348,
      requestDate: "2021-08-05T06:04:01.683Z",
      requestAmount: 250,
      transactionID: "64082e1a-970d-4ba0-855a-9b651023727c",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":5.75000000,"response_code":"10000"}',
      status: "Success",
      approvedDate: "2021-08-05T06:05:27.01Z",
      type: "Card",
      pg_name: "Checkout",
    },
    {
      id: 30157,
      requestDate: "2021-08-03T13:06:23.053Z",
      requestAmount: 100,
      transactionID: "090408d1-411d-496e-abca-7e551ee3e2d7",
      rejectReason: null,
      comments: '{"card_id":9801,"fees":2.45000000,"response_code":"10000"}',
      status: "Success",
      approvedDate: "2021-08-03T13:06:59.093Z",
      type: "Card",
      pg_name: "Checkout",
    },
  ],
};

//creare una funzione che prenda come argomento youngDeposits e  faccia uscire un array di exampleDepositResult
// ci devono essere solo
// - depositi approvati
// - se con carta ci sono le fee ( commissioni ), bonifico non le ha (mettere 0)
// per estrarre fees all'interno di comments devi "parsare" json ( json parse )
export function transformYoungDepositsResponseToDbTDeposits(
  youngResponse: YoungPlatformDepositsResponse
): StorableDepositData[] {
  const approvedDeposits = youngResponse.data.filter(function (deposit) {
    return deposit.status === "Approved" || deposit.status === "Success";
  });
  console.log("filter", approvedDeposits);

  const result = approvedDeposits.map(function (deposit) {
    return {
      amount: deposit.requestAmount,
      confirmDate: new Date(deposit.approvedDate).toLocaleDateString(),
      currencyName: "EUR",
      exchangeTransactionId: deposit.transactionID,
      paymentMethod: deposit.type === "Card" ? "credit-card" : "wire-transfer",
      type: "deposit",
      userId: 1,
      fee: deposit.type === "Card" ? JSON.parse(deposit.comments).fees : 0,
    } as StorableDepositData;
  });
  console.log("result ", result);
  return result;
}

export const registeredDeposits = transformYoungDepositsResponseToDbTDeposits(youngDepositsResponse);
