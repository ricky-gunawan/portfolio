import Head from "next/head";
import Contents from "../components/contents";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricky Indra Gunawan`s Portfolio</title>
        <meta name="description" content="Ricky Indra Gunawan`s Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Contents />
        <Footer />
      </main>
    </div>
  );
}
