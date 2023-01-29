import Head from "next/head";
import Main from "../components/login/main";
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
        <Main className="flex" />
      </Layout>
    </div>
  );
}
