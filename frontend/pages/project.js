import Head from "next/head";
import Image from "next/image";
import Content from "../components/project/content";
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
        <Content />
      </Layout>
    </div>
  );
}
