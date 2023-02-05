import Head from "next/head";
import Content from "../components/home/content";
import Hero from "../components/home/hero";
import Layout from "../components/layout";
import LoginMain from "../components/login/main";

export default function Login() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Layout> */}
      <div className="flex flex-col items-center justify-between relative h-[100vh]">
        <div className="max-w-6xl mx-3 lg:mx-auto z-0">
          <LoginMain className="flex"></LoginMain>
        </div>
      </div>
      {/* </Layout> */}
    </div>
  );
}
