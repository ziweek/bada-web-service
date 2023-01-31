import Image from "next/image";
import logoPic from "../../public/logo_192.png";
import { Dropdown } from "@nextui-org/react";
import React from "react";

export default function Step() {
  const resGeneration = ["3rd", "2nd", "1st"];
  const resRecruit = [1, 2, 3, 4, 5, 6, 7, 8];
  const [selected, setSelected] = React.useState(new Set([resGeneration[0]]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  // poster_image, checklist_image
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1
                  data-aos="flip-right"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-center"
                  className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl mb-2 sm:mb-0"
                >
                  CLUB <br className="block md:hidden" />
                  RECUIT
                </h1>
                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="500"
                  className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"
                >
                  Street art subway tile salvia four dollar toast bitters
                  selfies quinoa yuccie synth meditation iPhone intelligentsia
                  prism tofu. Viral gochujang bitters dreamcatcher.
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
              {/* <div className="flex w-24 pb-2 items-center justify-between"> */}
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
            <div className="flex flex-wrap w-full justify-center">
              <Image
                className="md:pr-10 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 pb-8 md:pb-0"
                src={logoPic}
                alt="step"
                width={1200}
                height={500}
              />
              <div className="md:w-1/2 md:py-6 items-center justify-center">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">
                      Vice migas literally kitsch +1 pok pok. Truffaut hot
                      chicken slow-carb health goth, vape typewriter.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">
                      Coloring book nar whal glossier master cleanse umami.
                      Salvia +1 master cleanse blog taiyaki.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 4
                    </h2>
                    <p className="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p className="leading-relaxed">
                      Pitchfork ugh tattooed scenester echo park gastropub
                      whatever cold-pressed retro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
