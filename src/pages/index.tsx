import type { NextPage } from "next";
import Head from "next/head";
import { Wallet } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hodl tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>welcome to hodl tracker</h1>
        <Wallet />
      </main>

      <footer>silvicardo</footer>
    </div>
  );
};

export default Home;
