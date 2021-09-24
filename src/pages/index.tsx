import type { NextPage } from "next";
import Head from "next/head";
import { useExchangeCurrencies } from "../hooks";
import { MarketRecapTable } from "../components/MarketRecapTable/MarketRecapTable";
import { Button, Container, Grid } from "@material-ui/core";
import Link from "next/link";

const Home: NextPage = () => {
  const { data } = useExchangeCurrencies(3000);

  return (
    <div>
      <Head>
        <title>Hodl-tracker</title>
        <meta name="description" content="Hodl tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxWidth={"xl"}>
          <h1 style={{ textAlign: "center" }}>welcome to hodl tracker</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} style={{ maxHeight: 600, overflow: "auto" }}>
              <MarketRecapTable data={data} filteredSymbols={["BTC", "ADA", "AAVE", "ETH", "UNI", "LUNA"]} />
            </Grid>
            <Grid item xs={12} lg={8}>
              <h3 style={{ marginBottom: 20 }}>Pick an action</h3>
              <Link href="transaction/create">
                <Button variant="contained" color="primary">
                  Create a transaction
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </main>

      <footer style={{ textAlign: "center" }}>silvicardo</footer>
    </div>
  );
};

export default Home;
