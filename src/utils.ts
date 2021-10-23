import { FirebaseTradeData, FirebaseTransactionData } from "./types/firebaseEntities";
import { CoinName, YoungPlatformOrder, YoungPlatformOrderResponse } from "./types";
import { YoungPlatformDeposit, YoungPlatformDepositsResponse } from "./types/youngPlatformDepositsResponse";
import firebase from "../firebase/initFirebase";

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

type StorableDepositData = Omit<FirebaseTransactionData, "confirmDate"> & { confirmDate: string };

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
  //console.log("filter", approvedDeposits);

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
  //  console.log("result ", result);
  return result;
}

export const registeredDeposits = transformYoungDepositsResponseToDbTDeposits(youngDepositsResponse);

// ***** ORDERS ( TRANSACTIONS )  ***** //
type StorableTradeData = Omit<FirebaseTradeData, "confirmDate"> & { confirmDate: string };
const exampleResult: YoungPlatformOrder = {
  isProOrder: false,
  orderId: 1847775308,
  date: "2021-10-06T08:40:28.52Z",
  currencyPair: "BTC-EUR",
  side: "BUY", // OPPURE SELL
  tradeType: "LIMIT",
  tradePrice: "43510.00000000 EUR",
  averagePrice: "43510.00000000 EUR",
  size: "0.00080000 BTC",
  filled: "0.00080000 BTC", //CIFRA ACQUISTATA
  feePaid: "0.00000160 BTC",
  totalExecutedValue: "34.8080000000000000 EUR", //CIFRA SPESA
  stopPrice: "0.00000000 EUR",
  orderStatus: "Filled",
  mOrders: [],
};

const exampleResponseDataObject: StorableTradeData = {
  confirmDate: new Date("2021-10-06T08:48:11.175222Z").toLocaleString(),
  initialCurrencyName: "EUR", // moneta di partenza, quella di totalExecutedValue
  destinationCurrencyName: "BTC", //moneta di arrivo , quella in filled
  initialCurrencySpentAmount: 34.808, //totalExecutedValue
  destinationCurrencyPrice: 43510.0, //trade Price
  destinationCurrencyFilledAmount: 0.0008, //filled
  destinationCurrencyFeePaid: 0.0000016, //feePaid
  exchangeTradeId: "1847775308", //orderId
  type: "buy", // i valori qui possono essere "buy" | "sell", vedere side
  userId: 1, // FISSO
  currencyPair: "BTC-EUR", //currencyPair
};

//

const youngOrdersResponse: YoungPlatformOrderResponse = {
  status: "Success",
  message: "Success!",
  data: {
    pageInfo: { totalRows: 23, currentPage: 1, pageSize: 100 },
    rows: [
      {
        isProOrder: false,
        orderId: 1897308340,
        date: "2021-10-17T21:39:09.147Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "30.59000000 EUR",
        averagePrice: "30.59000000 EUR",
        size: "1.01000000 LUNA",
        filled: "1.01000000 LUNA",
        feePaid: "0.00202000 LUNA",
        totalExecutedValue: "30.8959000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1897308340,
            volume: 1.01,
            rate: 30.59,
            trade: "LUNA",
            market: "EUR",
            amount: 30.8959,
            serviceCharge: 0.00202,
            date: "2021-10-17T21:39:09.16Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1896715181,
        date: "2021-10-17T18:20:09.34Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "31.92000000 EUR",
        averagePrice: "31.92000000 EUR",
        size: "0.62000000 LUNA",
        filled: "0.62000000 LUNA",
        feePaid: "0.00124000 LUNA",
        totalExecutedValue: "19.7904000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1896715181,
            volume: 0.62,
            rate: 31.92,
            trade: "LUNA",
            market: "EUR",
            amount: 19.7904,
            serviceCharge: 0.00124,
            date: "2021-10-17T18:20:09.397Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1887385488,
        date: "2021-10-15T14:09:40.617Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "31.50000000 EUR",
        averagePrice: "31.50000000 EUR",
        size: "0.70000000 LUNA",
        filled: "0.70000000 LUNA",
        feePaid: "0.00140000 LUNA",
        totalExecutedValue: "22.0500000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1887385488,
            volume: 0.7,
            rate: 31.5,
            trade: "LUNA",
            market: "EUR",
            amount: 22.05,
            serviceCharge: 0.0014,
            date: "2021-10-15T14:11:43.753Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1887384036,
        date: "2021-10-15T14:09:15.873Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "31.50000000 EUR",
        averagePrice: "0 EUR",
        size: "1.00000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1880003308,
        date: "2021-10-13T20:52:38.677Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "30.99000000 EUR",
        averagePrice: "30.99000000 EUR",
        size: "1.00000000 LUNA",
        filled: "1.00000000 LUNA",
        feePaid: "0.00200000 LUNA",
        totalExecutedValue: "30.9900000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1880003308,
            volume: 1.0,
            rate: 30.99,
            trade: "LUNA",
            market: "EUR",
            amount: 30.99,
            serviceCharge: 0.002,
            date: "2021-10-15T09:05:17.377Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1873554005,
        date: "2021-10-12T08:48:44.693Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "32.50000000 EUR",
        averagePrice: "32.50000000 EUR",
        size: "1.00000000 LUNA",
        filled: "1.00000000 LUNA",
        feePaid: "0.00200000 LUNA",
        totalExecutedValue: "32.5000000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1873554005,
            volume: 1.0,
            rate: 32.5,
            trade: "LUNA",
            market: "EUR",
            amount: 32.5,
            serviceCharge: 0.002,
            date: "2021-10-12T08:59:01.107Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1873210280,
        date: "2021-10-12T06:53:30.087Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "31.99000000 EUR",
        averagePrice: "31.99000000 EUR",
        size: "1.00000000 LUNA",
        filled: "1.00000000 LUNA",
        feePaid: "0.00200000 LUNA",
        totalExecutedValue: "31.9900000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1873210280,
            volume: 1.0,
            rate: 31.99,
            trade: "LUNA",
            market: "EUR",
            amount: 31.99,
            serviceCharge: 0.002,
            date: "2021-10-12T09:45:42.27Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1869093125,
        date: "2021-10-11T07:52:11.257Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "35.20000000 EUR",
        averagePrice: "35.07000000 EUR",
        size: "0.50000000 LUNA",
        filled: "0.50000000 LUNA",
        feePaid: "0.00100000 LUNA",
        totalExecutedValue: "17.5350000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1869093125,
            volume: 0.5,
            rate: 35.07,
            trade: "LUNA",
            market: "EUR",
            amount: 17.535,
            serviceCharge: 0.001,
            date: "2021-10-11T07:52:11.27Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1869041256,
        date: "2021-10-11T07:34:51.073Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "33.00000000 EUR",
        averagePrice: "0 EUR",
        size: "1.00000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1847923161,
        date: "2021-10-06T09:29:59.37Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "35.25000000 EUR",
        averagePrice: "35.21000000 EUR",
        size: "0.50000000 LUNA",
        filled: "0.50000000 LUNA",
        feePaid: "0.00100000 LUNA",
        totalExecutedValue: "17.6050000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1847923161,
            volume: 0.5,
            rate: 35.21,
            trade: "LUNA",
            market: "EUR",
            amount: 17.605,
            serviceCharge: 0.001,
            date: "2021-10-06T09:29:59.47Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1839221623,
        date: "2021-10-04T08:50:39.567Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "30.00000000 EUR",
        averagePrice: "0 EUR",
        size: "1.00000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1839038291,
        date: "2021-10-04T07:49:13.723Z",
        currencyPair: "LUNA-EUR",
        side: "SELL",
        tradeType: "LIMIT",
        tradePrice: "50.00000000 EUR",
        averagePrice: "0 EUR",
        size: "7.96000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1822470985,
        date: "2021-09-30T08:48:33.443Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "27.00000000 EUR",
        averagePrice: "0 EUR",
        size: "1.00000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Pending",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1781580167,
        date: "2021-09-20T19:15:57.257Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "23.55000000 EUR",
        averagePrice: "23.52000000 EUR",
        size: "2.12000000 LUNA",
        filled: "2.12000000 LUNA",
        feePaid: "0.00424000 LUNA",
        totalExecutedValue: "49.8624000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1781580167,
            volume: 2.12,
            rate: 23.52,
            trade: "LUNA",
            market: "EUR",
            amount: 49.8624,
            serviceCharge: 0.00424,
            date: "2021-09-20T19:15:57.273Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1781575358,
        date: "2021-09-20T19:14:20.107Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "23.50000000 EUR",
        averagePrice: "0 EUR",
        size: "2.12000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1780682332,
        date: "2021-09-20T14:14:42.093Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "25.47000000 EUR",
        averagePrice: "25.47000000 EUR",
        size: "1.37000000 LUNA",
        filled: "1.37000000 LUNA",
        feePaid: "0.00274000 LUNA",
        totalExecutedValue: "34.8939000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1780682332,
            volume: 1.37,
            rate: 25.47,
            trade: "LUNA",
            market: "EUR",
            amount: 34.8939,
            serviceCharge: 0.00274,
            date: "2021-09-20T14:14:43.487Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1780468058,
        date: "2021-09-20T13:02:56.667Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "23.59000000 EUR",
        averagePrice: "0 EUR",
        size: "2.00000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1779323113,
        date: "2021-09-20T06:39:13.21Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "26.68000000 EUR",
        averagePrice: "26.68000000 EUR",
        size: "2.24000000 LUNA",
        filled: "2.24000000 LUNA",
        feePaid: "0.00448000 LUNA",
        totalExecutedValue: "59.7632000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1779323113,
            volume: 2.24,
            rate: 26.68,
            trade: "LUNA",
            market: "EUR",
            amount: 59.7632,
            serviceCharge: 0.00448,
            date: "2021-09-20T06:39:13.273Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1767184996,
        date: "2021-09-17T10:45:45.507Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "29.51000000 EUR",
        averagePrice: "29.51000000 EUR",
        size: "0.64000000 LUNA",
        filled: "0.64000000 LUNA",
        feePaid: "0.00128000 LUNA",
        totalExecutedValue: "18.8864000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1767184996,
            volume: 0.64,
            rate: 29.51,
            trade: "LUNA",
            market: "EUR",
            amount: 18.8864,
            serviceCharge: 0.00128,
            date: "2021-09-17T10:45:45.557Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1766474422,
        date: "2021-09-17T06:47:17.097Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "30.87000000 EUR",
        averagePrice: "30.87000000 EUR",
        size: "0.96000000 LUNA",
        filled: "0.96000000 LUNA",
        feePaid: "0.00192000 LUNA",
        totalExecutedValue: "29.6352000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1766474422,
            volume: 0.96,
            rate: 30.87,
            trade: "LUNA",
            market: "EUR",
            amount: 29.6352,
            serviceCharge: 0.00192,
            date: "2021-09-17T06:47:17.133Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1764603050,
        date: "2021-09-16T20:19:17.607Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "29.50000000 EUR",
        averagePrice: "0 EUR",
        size: "1.00000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1764601433,
        date: "2021-09-16T20:18:42.007Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "30.05000000 EUR",
        averagePrice: "0 EUR",
        size: "1.00000000 LUNA",
        filled: "0 LUNA",
        feePaid: "0 LUNA",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1759021208,
        date: "2021-09-15T13:06:32.7Z",
        currencyPair: "LUNA-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "30.50000000 EUR",
        averagePrice: "30.50000000 EUR",
        size: "0.65000000 LUNA",
        filled: "0.65000000 LUNA",
        feePaid: "0.00130000 LUNA",
        totalExecutedValue: "19.8250000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1759021208,
            volume: 0.65,
            rate: 30.5,
            trade: "LUNA",
            market: "EUR",
            amount: 19.825,
            serviceCharge: 0.0013,
            date: "2021-09-16T01:24:10.287Z",
            side: "BUY",
          },
        ],
      },
    ],
  },
};

//controllare se BUY O SELL per non sbagliarsi a identificare type e chi vende e chi compra
//FILTRARE per approvati ( orderStatus dovrà essere "Filled"
//restituire oggetto risultato

export function transformYoungOrdersResponseToDbTrades(
  { data: { rows: orders } }: YoungPlatformOrderResponse,
  userId: string | number
): StorableTradeData[] {
  const filledOrders = orders.filter((order) => order.orderStatus === "Filled");

  return filledOrders.map(
    (order) =>
      ({
        confirmDate: new Date(order.date).toLocaleString(),
        initialCurrencyName: order.currencyPair.split("-")[order.side === "BUY" ? 1 : 0],
        destinationCurrencyName: order.currencyPair.split("-")[order.side === "SELL" ? 1 : 0],
        initialCurrencySpentAmount: order.totalExecutedValue.split(" ")[0],
        destinationCurrencyPrice: order.tradePrice.split(" ")[0],
        destinationCurrencyFilledAmount: order.filled.split(" ")[0],
        destinationCurrencyFeePaid: order.feePaid.split(" ")[0],
        exchangeTradeId: order.orderId.toString(),
        type: order.side === "BUY" ? "buy" : "sell",
        userId: userId,
        currencyPair: order.currencyPair,
      } as StorableTradeData)
  );
}

export const terraLUNAOrders = transformYoungOrdersResponseToDbTrades(youngOrdersResponse, 1);

export function batchWriteByCollection<K>(collectionnName: "trades" | "transactions", data: K[], dataIdKey: keyof K) {
  const db = firebase.firestore();
  const batch = db.batch();
  console.log("batch for collection: ", collectionnName);
  data.forEach((trade) => {
    let tradeId = trade[dataIdKey];
    if (typeof tradeId === "string") {
      let nextTradeRef = db.collection("trades").doc(tradeId.toString());
      batch.set(nextTradeRef, trade);
      console.log("batch set ", tradeId);
    }
  });
  return batch.commit();
}
function sumValuesByKey(data: FirebaseTradeData[] = [], key: keyof FirebaseTradeData) {
  return data.reduce((total, b) => total + +b[key], 0);
}
export function getCurrencyPairAggregatedDataFromDbData(
  pairData: FirebaseTradeData[] = [] as FirebaseTradeData[],
  destinationCurrencyValuePerUnitInInitialCurrency: number = 0
) {
  const destinationTotalPurchases = sumValuesByKey(
    pairData.filter((trade) => trade.type == "buy"),
    "destinationCurrencyFilledAmount"
  );

  const destinationTotalPurchaseFees = sumValuesByKey(
    pairData.filter((trade) => trade.type == "buy"),
    "destinationCurrencyFeePaid"
  );

  const destinationNetPurchase = destinationTotalPurchases - destinationTotalPurchaseFees;

  const originTotalSpent = sumValuesByKey(
    pairData.filter((trade) => trade.type == "buy"),
    "initialCurrencySpentAmount"
  );

  const averageLoadPrice = originTotalSpent / destinationNetPurchase;

  const valueInInitialCurrency = destinationCurrencyValuePerUnitInInitialCurrency * destinationNetPurchase;
  const potentialInitialCurrencyGain = valueInInitialCurrency - originTotalSpent;

  const potentialPercentageGain = (potentialInitialCurrencyGain / originTotalSpent) * 100;

  return {
    purchases: {
      gross: destinationTotalPurchaseFees,
      fees: destinationTotalPurchaseFees,
      net: destinationNetPurchase,
      spent: originTotalSpent,
      averageLoadPrice,
    },
    potentialProfit: {
      initialCurrencyGain: potentialInitialCurrencyGain,
      gainPercentage: potentialPercentageGain,
    },
    sales: {
      gross: sumValuesByKey(
        pairData.filter((trade) => trade.type == "sell"),
        "initialCurrencySpentAmount"
      ),
    },
  };
}
