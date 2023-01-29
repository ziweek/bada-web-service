import Image from "next/image";
import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function MemberMain() {
  // profileImage, name, position, memo, experience1, experience2, experience3, link_linkedIn, link_github, link_instagram
  // const res = [1];
  const resGeneration = ["3rd", "2nd", "1st"];
  const resMember = [1, 2, 3, 4, 5, 6, 7, 8];
  const [selected, setSelected] = React.useState(new Set([resGeneration[0]]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

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
                CLUB <br className="block md:hidden" />
                MEMBER
              </h1>
              {/* </div> */}
              <p
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="500"
                className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"
              >
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="1000"
            className="mb-32"
          >
            <div className="flex w-full items-center justify-between pb-2">
              <p className="text-gray-300 font-bold">Foundation</p>
              <Dropdown>
                <Dropdown.Button flat>
                  <p className="text-blue-400 font-bold">{selectedValue}</p>
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="default"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  {resGeneration.map((e, i) => (
                    <Dropdown.Item key={e}>{e}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="flex justify-end h-2 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-blue-400"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {/*  */}
            {resMember.map((e, i) => (
              <div
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
                key={i}
                className="p-4 lg:w-1/4 md:w-1/2 pb-8"
              >
                <div className="h-full flex flex-col items-center text-center">
                  <Image
                    priority={true}
                    width={200}
                    height={200}
                    alt="member"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://dummyimage.com/200x200"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Alex JiUk Kim
                    </h2>
                    <h3 className="text-gray-500 mb-3">President of Club</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <div className="m-3">
                      <p>CTO at NYSE</p>
                      <p>NEXTxLikelion</p>
                      <p>GDSC at KU</p>
                    </div>
                    <span className="inline-flex">
                      <a className="text-gray-500">
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
                      <a className="ml-2 text-gray-500">
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
                      <a className="ml-2 text-gray-500">
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
                </div>
              </div>
            ))}
            {/*  */}
            {/* <div className="p-4 lg:w-1/4 md:w-1/2 pb-8">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  priority={true}
                  width={202}
                  height={202}
                  alt="member"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Alex JiUk Kim
                  </h2>
                  <h3 className="text-gray-500 mb-3">President of Club</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <div className="m-3">
                    <p>CTO at NYSE</p>
                    <p>NEXTxLikelion</p>
                    <p>GDSC at KU</p>
                  </div>
                  <span className="inline-flex">
                    <a className="text-gray-500">
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
                    <a className="ml-2 text-gray-500">
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
                    <a className="ml-2 text-gray-500">
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
              </div>
            </div> */}
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
}
