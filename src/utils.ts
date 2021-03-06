import { FirebaseTradeData, FirebaseTransactionData } from "./types/firebaseEntities";
import { CoinName, YoungPlatformOrder, YoungPlatformOrderResponse } from "./types";
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
  message: "Success!",
  status: "Success",
  data: {
    pageInfo: {
      currentPage: 1,
      pageSize: 100,
      totalRows: 132,
    },
    rows: [
      {
        isProOrder: false,
        orderId: 1847842396,
        date: "2021-10-06T09:03:00.258176Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "37900.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.01000000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Pending",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1847798272,
        date: "2021-10-06T08:48:11.175222Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "41999.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00100000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Pending",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1847775308,
        date: "2021-10-06T08:40:28.52Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "43510.00000000 EUR",
        averagePrice: "43510.00000000 EUR",
        size: "0.00080000 BTC",
        filled: "0.00080000 BTC",
        feePaid: "0.00000160 BTC",
        totalExecutedValue: "34.8080000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1847775308,
            volume: 0.0008,
            rate: 43510,
            trade: "BTC",
            market: "EUR",
            amount: 34.808,
            serviceCharge: 0.0000016,
            date: "2021-10-06T08:49:11.273Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1847488781,
        date: "2021-10-06T07:04:24.9776181Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "42999.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00080000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Pending",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1839721189,
        date: "2021-10-04T11:38:10.33312Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "40500.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00100000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Pending",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1839210444,
        date: "2021-10-04T08:46:56.2589673Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "39900.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00260000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Pending",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1833037655,
        date: "2021-10-02T22:15:38.7243794Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "39000.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00170000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Pending",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1826518031,
        date: "2021-10-01T09:42:39.6Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "37900.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00200000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1826131893,
        date: "2021-10-01T07:33:03.327Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "36600.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00140000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1826125274,
        date: "2021-10-01T07:30:51.917Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "365029.00000000 EUR",
        averagePrice: "38493.90000000 EUR",
        size: "0.00015000 BTC",
        filled: "0.00015000 BTC",
        feePaid: "0.00000000 BTC",
        totalExecutedValue: "5.7740850000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1826125274,
            volume: 0.00015,
            rate: 38493.9,
            trade: "BTC",
            market: "EUR",
            amount: 5.774085,
            serviceCharge: 0,
            date: "2021-10-01T07:30:51Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1822475467,
        date: "2021-09-30T08:50:02.58Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "35600.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00290000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1818035663,
        date: "2021-09-29T07:59:39.547Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "32900.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00200000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1818033344,
        date: "2021-09-29T07:58:52.963Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "34800.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00290000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1818027205,
        date: "2021-09-29T07:56:48.263Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "33900.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00290000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1817976609,
        date: "2021-09-29T07:39:45.787Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "34800.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00430000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1797759195,
        date: "2021-09-24T13:49:23.557Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "35860.16000000 EUR",
        averagePrice: "35860.16000000 EUR",
        size: "0.00175000 BTC",
        filled: "0.00175000 BTC",
        feePaid: "0.00000350 BTC",
        totalExecutedValue: "62.7552800000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1797759195,
            volume: 0.00175,
            rate: 35860.16,
            trade: "BTC",
            market: "EUR",
            amount: 62.75528,
            serviceCharge: 0.0000035,
            date: "2021-09-24T13:49:23.61Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1797744017,
        date: "2021-09-24T13:44:35.247Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "35550.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00176000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1797388416,
        date: "2021-09-24T11:45:18.983Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "34900.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00180000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1797383185,
        date: "2021-09-24T11:43:34.03Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "34800.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00150000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1797363323,
        date: "2021-09-24T11:36:51.27Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "35511.81000000 EUR",
        averagePrice: "35511.81000000 EUR",
        size: "0.00140000 BTC",
        filled: "0.00140000 BTC",
        feePaid: "0.00000280 BTC",
        totalExecutedValue: "49.7165340000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1797363323,
            volume: 0.0014,
            rate: 35511.81,
            trade: "BTC",
            market: "EUR",
            amount: 49.716534,
            serviceCharge: 0.0000028,
            date: "2021-09-24T11:36:51.283Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1797350927,
        date: "2021-09-24T11:32:42.383Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "35200.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00180000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1797319003,
        date: "2021-09-24T11:21:59.647Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "34800.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00140000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1796709153,
        date: "2021-09-24T07:57:25.44Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "37750.00000000 EUR",
        averagePrice: "37750.00000000 EUR",
        size: "0.00130000 BTC",
        filled: "0.00130000 BTC",
        feePaid: "0.00000260 BTC",
        totalExecutedValue: "49.0750000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1796709153,
            volume: 0.0013,
            rate: 37750,
            trade: "BTC",
            market: "EUR",
            amount: 49.075,
            serviceCharge: 0.0000026,
            date: "2021-09-24T09:06:31.203Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1780658974,
        date: "2021-09-20T14:06:54.527Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "37800.00000000 EUR",
        averagePrice: "37800.00000000 EUR",
        size: "0.00120000 BTC",
        filled: "0.00120000 BTC",
        feePaid: "0.00000240 BTC",
        totalExecutedValue: "45.3600000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1780658974,
            volume: 0.0012,
            rate: 37800,
            trade: "BTC",
            market: "EUR",
            amount: 45.36,
            serviceCharge: 0.0000024,
            date: "2021-09-20T14:12:40.35Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1780467153,
        date: "2021-09-20T13:02:36.427Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "36750.00000000 EUR",
        averagePrice: "0 EUR",
        size: "0.00130000 BTC",
        filled: "0 BTC",
        feePaid: "0 BTC",
        totalExecutedValue: "0 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [],
      },
      {
        isProOrder: false,
        orderId: 1779360385,
        date: "2021-09-20T06:51:43.833Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "39334.14000000 EUR",
        averagePrice: "39334.14000000 EUR",
        size: "0.00129000 BTC",
        filled: "0.00129000 BTC",
        feePaid: "0.00000258 BTC",
        totalExecutedValue: "50.7410406000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1779360385,
            volume: 0.00129,
            rate: 39334.14,
            trade: "BTC",
            market: "EUR",
            amount: 50.7410406,
            serviceCharge: 0.00000258,
            date: "2021-09-20T06:51:43.87Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1779325369,
        date: "2021-09-20T06:39:59.273Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "MARKET",
        tradePrice: "39300.00000000 EUR",
        averagePrice: "39300.00000000 EUR",
        size: "0.00052000 BTC",
        filled: "0.00051000 BTC",
        feePaid: "0.00000102 BTC",
        totalExecutedValue: "20.0430000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Cancelled",
        mOrders: [
          {
            orderId: 1779325369,
            volume: 0.00051,
            rate: 39300,
            trade: "BTC",
            market: "EUR",
            amount: 20.043,
            serviceCharge: 0.00000102,
            date: "2021-09-20T06:39:59.32Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1762672643,
        date: "2021-09-16T09:31:47.483Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "41000.00000000 EUR",
        averagePrice: "41000.00000000 EUR",
        size: "0.00120000 BTC",
        filled: "0.00120000 BTC",
        feePaid: "0.00000240 BTC",
        totalExecutedValue: "49.2000000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1762672643,
            volume: 0.0012,
            rate: 41000,
            trade: "BTC",
            market: "EUR",
            amount: 49.2,
            serviceCharge: 0.0000024,
            date: "2021-09-16T09:55:34.17Z",
            side: "BUY",
          },
        ],
      },
      {
        isProOrder: false,
        orderId: 1762648579,
        date: "2021-09-16T09:23:41.637Z",
        currencyPair: "BTC-EUR",
        side: "BUY",
        tradeType: "LIMIT",
        tradePrice: "40500.00000000 EUR",
        averagePrice: "40500.00000000 EUR",
        size: "0.00100000 BTC",
        filled: "0.00100000 BTC",
        feePaid: "0.00000200 BTC",
        totalExecutedValue: "40.5000000000000000 EUR",
        stopPrice: "0.00000000 EUR",
        orderStatus: "Filled",
        mOrders: [
          {
            orderId: 1762648579,
            volume: 0.001,
            rate: 40500,
            trade: "BTC",
            market: "EUR",
            amount: 40.5,
            serviceCharge: 0.000002,
            date: "2021-09-16T10:42:53.223Z",
            side: "BUY",
          },
        ],
      },
    ],
  },
};

//controllare se BUY O SELL per non sbagliarsi a identificare type e chi vende e chi compra
//FILTRARE per approvati ( orderStatus dovr?? essere "Filled"
//restituire oggetto risultato

export function transformYoungOrdersResponseToDbTransactions(
  orderResponse: YoungPlatformOrderResponse
): StorableTradeData[] {
  console.log("input", orderResponse);
  return [] as StorableTradeData[];
}

export const bitcoinOrders = transformYoungOrdersResponseToDbTransactions(youngOrdersResponse);
