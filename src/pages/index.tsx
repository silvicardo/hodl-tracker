import type { NextPage } from "next";
import Head from "next/head";
import { useExchangeCurrencies, useFirebaseData, useFirebaseTransactionsTotals } from "../hooks";
import { MarketRecapTable } from "../components";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import { AppNav } from "../components";
import { FirebaseTransactionData } from "../types/firebaseEntities";
import { terraLUNAOrders, registeredDeposits } from "../utils";
import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../firebase/initFirebase";

const Home: NextPage = () => {
  // Destructure user, loading, and error out of the hook.
  const [user, loading, error] = useAuthState(firebase.auth());
  // console.log the current user and loading status
  console.log("Loading:", loading, "|", "Current user:", user);
  const { data } = useExchangeCurrencies(60000);
  /*
  const {
    readableData: transactions,
    isDataLoading: transactionsLoading,
    fetchError: transactionsError,
  } = useFirebaseData<FirebaseTransactionData>("transactions");
  const { deposit: depositAmounts } = useFirebaseTransactionsTotals(transactions);

   */

  useMemo(() => {
    //console.log("trasformazione", registeredDeposits);
    console.log("bitcoin orders", terraLUNAOrders);
  }, []);
  return (
    <>
      <Head>
        <title>Hodl-tracker</title>
        <meta name="description" content="Hodl tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNav isUserLogged />
      <main style={{ paddingTop: 32 }}>
        <Container maxWidth={"xl"}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} style={{ maxHeight: 600, overflow: "auto" }}>
              <MarketRecapTable data={data} filteredSymbols={["BTC", "ADA", "AAVE", "ETH", "UNI", "LUNA"]} />
            </Grid>
            <Grid container item xs={12} lg={8}>
              <h3 style={{ marginBottom: 20 }}>Pick an action</h3>
              <Grid item xs={12}>
                <Link href="transaction/create">
                  <Button variant="contained" color="primary">
                    Create a transaction
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="trade/create">
                  <Button variant="contained" color="primary">
                    Create a Trade
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Typography variant="h1" component="h2">
                {/* Deposit total : {depositAmounts.credit} */}
              </Typography>
              <Typography variant="h1" component="h2">
                {/* Fees total : {depositAmounts.fees} */}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Home;
