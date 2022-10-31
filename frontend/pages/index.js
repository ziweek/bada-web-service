import Head from "next/head";
import Image from "next/image";
import Content from "../components/home/content";
import Detail from "../components/home/detail";
import Hero from "../components/home/hero";
import Step from "../components/home/step";
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
        <Hero />
        {/* <Detail /> */}
        {/* <Step /> */}
        <Content />
      </Layout>
    </div>
  );
}
