import Image from "next/image";

export default function MemberMain() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              {/* haven't heard of them. */}
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {/* Profile */}
            <div className="p-2 lg:w-1/3  md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  width={200}
                  height={200}
                  alt="team"
                  className="w-24 h-24 xl:w-36 xl:h-36  bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={"https://dummyimage.com/108x98"}
                />
                <div className="flex-grow py-5 pl-2 xl:pl-8">
                  <div className=" flex flex-row justify-end items-end">
                    <h2 className="text-gray-900 title-font font-bold text-2xl">
                      김지욱
                    </h2>
                    <p className="text-gray-500 pl-2">학회장</p>
                  </div>
                  <div className="flex items-center justify-end pb-2">
                    <span className="inline-flex mt-4">
                      {/* LinkedIn */}
                      <a className="ml-3 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                      {/* GitHub */}
                      <a className="ml-3 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            // stroke="none"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                      <a className="ml-3 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="text-gray-500 text-right">CTO at NYSE</p>
                  <p className="text-gray-500 text-right">NEXTxLIKELION</p>
                  <p className="text-gray-500 text-right">KuGods</p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
}
