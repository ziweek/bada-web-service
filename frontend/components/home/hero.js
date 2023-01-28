import AnimationWave from "../animations/animation-wave";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Link from "next/link";
// ..

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // mirror: false,
      // once: true,
    });
  });

  return (
    <>
      <div>
        <section className=" bg-primary text-gray-600 body-font">
          <div className="container mx-auto flex px-5 md:py-12 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <div
                // data-aos="zoom-in"
                // data-aos-offset="200"
                // data-aos-delay="100"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-out"
                // data-aos-mirror="false"
                // data-aos-once="true"
                // data-aos-anchor-placement="top-center"
                className="pt-16"
              >
                <AnimationWave />
              </div>
              {/* <div className="block md:hidden">
                <br />
                <br />
                <br />
              </div> */}
              <div
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-bottom"
                // data-aos-offset="200"
                // data-aos-delay="150"
                // data-aos-easing="ease-in-out"
                // data-aos-mirror="false"
                // data-aos-once="true"
              >
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                  Beyond Analytics, Develop Answer
                </h1>
              </div>
              <div
                data-aos="fade-in"
                // data-aos-duration="1000"
                // data-aos-offset="200"
                data-aos-delay="1000"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-out"
                // data-aos-mirror="false"
                // data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="mb-8 leading-relaxed">
                  고려대학교 경영학회 bada는 Business Analytics를 연구하는
                  학회입니다.
                  <br className="hidden md:block" />본 학회에서는 경영학,
                  통계학, 데이터과학에 관련된 핵심적인 지식을 공유하고,
                  <br className="hidden md:block" /> 이를 기반으로 하여 다양한
                  프로젝트를 수행하고 있습니다.
                </p>
              </div>
              <div
                data-aos="fade-in"
                // data-aos-duration="1500"
                // data-aos-offset="200"
                data-aos-delay="1500"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-out"
                // data-aos-mirror="false"
                // data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                className="flex justify-center"
              >
                <Link
                  href="/apply"
                  className="text-gray-400 inline-flex  border-0 py-2 px-6 focus:outline-none dark:hover:text-white hover:text-black rounded text-lg items-center justify-center"
                >
                  학회 지원하기
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
    </>
  );
}
