import Head from "next/head";
import Hero from "../components/home/hero";
import Layout from "../components/layout";
import Canvas from "../components/apply/canvas";

export default function Home() {
  return (
    <div>
      <Head>
        <title>bada</title>
        <meta name="description" content="bada" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black min-h-screen flex">
        <div className="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <div className="fixed " style={{ width: "100%", height: "100%" }}>
            {/* <motion.div animate={IsVisible ? { opacity: 1 } : { opacity: 0 }}> */}
            <Canvas minSpeed={15} maxSpeed={50} />
            {/* </motion.div> */}
          </div>
          <div className="absolute z-10 flex items-center justify-center">
            {/* <button onClick={clickHandler}> */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={IsVisible ? { opacity: 1 } : { opacity: 0 }}
              >
                <motion.div
                  animate={IsClicked ? { scale: [0.5, 1.2, 0] } : { scale: 1 }}
                  transition={{}}
                >
                  <Image src={ImgTitle} alt="title" priority />
                </motion.div>
              </motion.div> */}
            {/* </button> */}
          </div>
          <div className="absolute bottom-40 z-20 py-30 flex">
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={IsVisible ? { opacity: 1 } : { opacity: 0 }}
            >
              <motion.div
                animate={IsClicked ? { opacity: 0 } : { opacity: [0.75, 0.4] }}
                transition={IsClicked ? {} : { repeat: Infinity }}
              >
                <p className="font-hsb">
                  위의 로고를 눌러서 메타버스로 입장하기
                </p>
              </motion.div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
