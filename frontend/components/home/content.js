import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function Content() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // mirror: true,
      // once: true,
    });
  });
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/500/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>
                <div
                  data-aos="fade-in"
                  data-aos-delay="250"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    ennui shaman taiyaki vape DIY tote bag drinking vinegar
                    cronut adaptogen squid fanny pack vaporware.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  // data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <span className="inline-block h-1 w-10 rounded bg-blue-400 mt-6 mb-4"></span>
                </div>
                <div
                  data-aos="fade-in"
                  // data-aos-duration="500"
                  data-aos-delay="500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">
                    고병완
                  </h2>
                </div>
                <div
                  data-aos="fade-in"
                  // data-aos-duration="500"
                  data-aos-delay="750"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="text-gray-500 text-sm">
                    고려대학교 경영대학 주임교수
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/500/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>
                <div
                  data-aos="fade-in"
                  data-aos-delay="250"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    ennui shaman taiyaki vape DIY tote bag drinking vinegar
                    cronut adaptogen squid fanny pack vaporware.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  // data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <span className="inline-block h-1 w-10 rounded bg-blue-400 mt-6 mb-4"></span>
                </div>
                <div
                  data-aos="fade-in"
                  // data-aos-duration="500"
                  data-aos-delay="500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">
                    김재환
                  </h2>
                </div>
                <div
                  data-aos="fade-in"
                  // data-aos-duration="500"
                  data-aos-delay="750"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="text-gray-500 text-sm">
                    고려대학교 경영대학 교수
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/500/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>
                <div
                  data-aos="fade-in"
                  data-aos-delay="250"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    ennui shaman taiyaki vape DIY tote bag drinking vinegar
                    cronut adaptogen squid fanny pack vaporware.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  // data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <span className="inline-block h-1 w-10 rounded bg-blue-400 mt-6 mb-4"></span>
                </div>
                <div
                  data-aos="fade-in"
                  // data-aos-duration="500"
                  data-aos-delay="500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">
                    유용재
                  </h2>
                </div>
                <div
                  data-aos="fade-in"
                  // data-aos-duration="500"
                  data-aos-delay="750"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="text-gray-500 text-sm">
                    서울대학교 산업공학 석박사과정
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
