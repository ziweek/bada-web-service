import Head from "next/head";
import Layout from "../components/layout";
import Step from "../components/recruit/step";

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
      </Layout>
    </div>
  );
}
