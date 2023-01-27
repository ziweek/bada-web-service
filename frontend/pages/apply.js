import Head from "next/head";
import Detail from "../components/apply/detail";
import Layout from "../components/layout";
import Step from "../components/apply/step";

export default function Home() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Step className="flex" />
        <Detail className="flex" />
      </Layout>
    </div>
  );
}
