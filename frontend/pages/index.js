import Head from "next/head";
import Content from "../components/home/content";
import Hero from "../components/home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="bg-primary">
        <Hero className="flex" />
        <Content className="flex" />
      </Layout>
    </div>
  );
}
