export interface YoungPlatformDeposit {
  id: number;
  requestDate: string; //Date;
  requestAmount: number;
  transactionID: string;
  rejectReason?: any;
  comments: string;
  status: string;
  approvedDate: string; //Date;
  type: string;
  pg_name: string;
}

export interface YoungPlatformDepositsResponse {
  status: string;
  message: string;
  data: YoungPlatformDeposit[];
}
