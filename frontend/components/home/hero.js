import AnimationWave from "../animations/animation-wave";

export default function Hero() {
  return (
    <>
      <div>
        <section className="bg-primary text-gray-600 body-font">
          <div>
            <AnimationWave />
          </div>
          <div className="container mx-auto flex px-5 md:py-12 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                이름자 슬퍼하는 멀리 사랑과 봅니다.
              </h1>
              <p className="mb-8 leading-relaxed">
                경, 하나에 이런 덮어 당신은 추억과 강아지, 계십니다. 보고,
                흙으로 하나에 밤이 추억과 까닭입니다. 마리아 가을로 오면 별 시와
                별 있습니다. 같이 아침이 묻힌 시인의 소녀들의 마리아 소학교 가을
                거외다. 풀이 까닭이요, 내 있습니다. 같이 아침이 묻힌 시인의
                소녀들의 마리아 소학교 가을 거외다. 풀이 까닭이요, 내 있습니다.
              </p>
              <div className="flex justify-center">
                <button className="text-gray-400 inline-flex  border-0 py-2 px-6 focus:outline-none dark:hover:text-white hover:text-black rounded text-lg items-center justify-center">
                  학회원 지원하기
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
                </button>
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
