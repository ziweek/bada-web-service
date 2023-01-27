import Head from "next/head";
import Detail from "../components/home/detail";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Detail></Detail>
      </Layout>
    </div>
  );
}
