import React, { useEffect, useMemo } from "react";
import { Box, Button, Container, Grid, Modal, Typography } from "@material-ui/core";
import { useFirebaseData, useModal } from "../../hooks";
import { FirebaseTradeData, FirebaseTransactionData } from "../../types/firebaseEntities";
import { AppNav, RegisterDataByJsonForm, RegisterTradeForm } from "../../components";
import Head from "next/head";
import { useTradesByParams } from "../../hooks/useTradesByParams/useTradesByParams";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../../firebase/initFirebase";
import { batchWriteByCollection, transformYoungOrdersResponseToDbTrades } from "../../utils";
import { YoungPlatformOrderResponse } from "../../types";

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
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log(user);
  const { data: tradeData, isLoading } = useTradesByParams({
    initialCurrencyName: "EUR",
    destinationCurrencyName: "LUNA",
  });

  const { close: closeTradesModal, open: openTradesModal, isOpened } = useModal();

  const tableData = useMemo(() => {
    if (isLoading || !tradeData) return [];
    return tradeData.map((trade) => ({
      ...trade,
      confirmDate: new Date(trade.confirmDate.seconds * 1000).toLocaleString(),
    }));
  }, [tradeData, isLoading]);

  console.log(tableData);
  if (!user) return "Login to register a trade";
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
              <RegisterDataByJsonForm
                onSubmit={(jsonString) => {
                  console.log(JSON.parse(jsonString));

                  const normalizedTrades = transformYoungOrdersResponseToDbTrades(
                    JSON.parse(jsonString) as YoungPlatformOrderResponse,
                    user!.uid
                  );
                  console.log("normalizedTrades", normalizedTrades);
                  return batchWriteByCollection<typeof normalizedTrades[number]>(
                    "trades",
                    normalizedTrades,
                    "exchangeTradeId"
                  );
                }}
                title={"Paste the YoungPlatform response here"}
              />
            </Grid>
          </Grid>
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
          <RegisterTradeForm userId={user.uid} />
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
