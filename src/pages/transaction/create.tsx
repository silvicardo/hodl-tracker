import React, { useMemo } from "react";
import { Box, Button, Container, Grid, Modal } from "@material-ui/core";
import { useFirebaseData, useModal } from "../../hooks";
import { FirebaseTransactionData } from "../../types/firebaseEntities";
import { RegisterTransactionForm } from "../../components";
import { GenericTable } from "../../components/GenericTable";

export interface ICreateProps {}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface RegisteredTransactionModalData extends Omit<FirebaseTransactionData, "confirmDate"> {
  confirmDate: string;
}

export default function Create({}: ICreateProps) {
  const {
    readableData: transactions,
    isDataLoading: transactionsLoading,
    fetchError: transactionsError,
  } = useFirebaseData<FirebaseTransactionData>("transactions");

  const { close: closeTransactionsModal, open: openTransactionsModal, isOpened } = useModal();

  const tableData = useMemo(
    () =>
      transactions.map(
        (trans) =>
          ({
            ...trans,
            confirmDate: new Date(trans.confirmDate.seconds * 1000).toLocaleString(),
          } as RegisteredTransactionModalData)
      ),
    [transactions]
  );

  return (
    <div style={{ padding: "50px 0", position: "relative", minHeight: "100vh" }}>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <h1>Register a transaction</h1>
          </Grid>
          <Grid item xs={12} lg={6}>
            {tableData.length > 0 ? (
              <Button onClick={openTransactionsModal} variant={"contained"}>
                Open registered transaction modal
              </Button>
            ) : null}
          </Grid>
        </Grid>
        <RegisterTransactionForm userId={1} />
      </Container>
      {tableData.length > 0 ? (
        <Modal
          open={isOpened}
          onClose={closeTransactionsModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <GenericTable
              data={tableData}
              displayedKeysNames={[
                "exchangeTransactionId",
                "amount",
                "fee",
                "currencyName",
                "type",
                "userId",
                "confirmDate",
              ]}
            />
          </Box>
        </Modal>
      ) : null}
    </div>
  );
}
