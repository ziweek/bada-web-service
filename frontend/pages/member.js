import Head from "next/head";
import Layout from "../components/layout";
import Team from "../components/member/team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Team />
      </Layout>
    </div>
  );
}
