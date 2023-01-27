import Head from "next/head";
import Layout from "../components/layout";
import MemberMain from "../components/member/main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="bg-primary">
        <MemberMain className="flex"></MemberMain>
      </Layout>
    </div>
  );
}
