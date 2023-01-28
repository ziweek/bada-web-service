import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function Content() {
  useEffect(() => {
    AOS.init({
      // duration: 1000,
      // mirror: false,
      // once: true,
    });
  });
  // banner, name, summary, link_github
  // const res = [1];
  const res = [1, 2, 3, 4, 5];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              {/* <div
                data-aos="flip-right"
                data-aos-duration="500"
                data-aos-anchor-placement="top-center"
              > */}
              <h1
                data-aos="flip-right"
                data-aos-duration="500"
                data-aos-anchor-placement="top-center"
                className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl mb-2 sm:mb-0"
              >
                CLUB ACTIVITY
              </h1>
              {/* </div> */}
              {/* <div
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
                data-aos-delay="500"
              > */}
              <p
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
                data-aos-delay="500"
                className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"
              >
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
              {/* </div> */}
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="1000"
            className="mb-32"
          >
            {/* <div className="flex w-24 pb-2 items-center justify-between"> */}
            <div className="flex w-full items-center justify-between pb-2">
              <p className="text-gray-300 font-bold">Founder</p>
              <div className="flex flex-row w-24 items-center justify-between">
                <div></div>
                <div></div>
                <p className="text-blue-400 font-bold">11st</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className="h-5 w-5"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-end h-2 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-blue-400"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {res.map((e, i) => (
              <div
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
                key={i}
                className="p-4 md:w-1/3 sm:mb-0 mb-6 pb-8"
              >
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    width={1200}
                    height={500}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://dummyimage.com/1203x503"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    badaTon 2022
                  </h2>
                  <div className="flex justify-between">
                    <a className="text-gray-500 inline-flex items-center mr-2 mt-5">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500 inline-flex items-center mr-2 mt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
