import React, { useMemo } from "react";
import { Box, Button, Container, Grid, Modal } from "@material-ui/core";
import { useFirebaseData, useModal } from "../../hooks";
import { FirebaseTradeData, FirebaseTransactionData } from "../../types/firebaseEntities";
import { AppNav, RegisterTradeForm } from "../../components";
import Head from "next/head";

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
    readableData: trades,
    isDataLoading: isTradesDataLoading,
    fetchError: tradeDataError,
  } = useFirebaseData<FirebaseTradeData>("trades");

  const { close: closeTradesModal, open: openTradesModal, isOpened } = useModal();

  const tableData = useMemo(
    () =>
      trades.map((trade) => ({
        ...trade,
        confirmDate: new Date(trade.confirmDate.seconds * 1000).toLocaleString(),
      })),
    [trades]
  );

  return (
    <>
      <Head>
        <title>Hodl-tracker</title>
        <meta name="description" content="Hodl tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNav isUserLogged />
      <div style={{ padding: "50px 0", position: "relative", minHeight: "100vh" }}>
        <Container maxWidth={"xl"}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <h1>Register a trade</h1>
            </Grid>
            <Grid item xs={12} lg={6} style={{ marginBottom: 32 }}>
              {tableData.length > 0 ? (
                <Button onClick={openTradesModal} variant={"contained"}>
                  Open registered transaction modal
                </Button>
              ) : null}
            </Grid>
          </Grid>
          <RegisterTradeForm userId={1} />
        </Container>
        {tableData.length > 0 ? (
          <Modal
            open={isOpened}
            onClose={closeTradesModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/*<GenericTable
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
              />*/}
            </Box>
          </Modal>
        ) : null}
      </div>
    </>
  );
}
