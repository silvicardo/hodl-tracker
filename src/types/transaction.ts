export interface PageInfo {
  totalRows: number;
  currentPage: number;
  pageSize: number;
}

export interface Transaction {
  requestDate: Date;
  amount: number;
  equivalentUsdAmt: number;
  currency: string;
  transactionID: string;
  rejectReason?: any;
  comments: string;
  status: string;
  type: string;
  currentTxnCount: number;
  requiredTxnCount: number;
  explorerURL?: any;
  address?: any;
  confirmDate: Date;
  fee: number;
  pg_name: string;
}
