import Head from "next/head";
import Content from "../components/home/content";
import Hero from "../components/home/hero";
import Layout from "../components/layout";
import RegisterMain from "../components/register/main";

export default function Register() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="flex flex-col items-center justify-between h-[100vh] min-w-full px-4">
        <div className="w-full z-0"> */}
      <Layout>
        <RegisterMain className="flex" />
      </Layout>
      {/* </div>
      </div> */}
    </div>
  );
}
