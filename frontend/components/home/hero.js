import AnimationWave from "../animations/animation-wave";

export default function Hero() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 md:py-24 items-center justify-center flex-col">
            <div className="mx-auto md:w-2/3">
              <AnimationWave />
            </div>
            <br />
            <br />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                이름자 슬퍼하는 멀리 사랑과 봅니다.
              </h1>
              <p className="mb-8 leading-relaxed">
                경, 하나에 이런 덮어 당신은 추억과 강아지, 계십니다. 보고,
                흙으로 하나에 밤이 추억과 까닭입니다. 마리아 가을로 오면 별 시와
                별 있습니다. 같이 아침이 묻힌 시인의 소녀들의 마리아 소학교 가을
                거외다. 풀이 까닭이요, 내 있습니다. 라이너 이웃 이국 이름과,
                봅니다. 오는 아이들의 차 버리었습니다. 사랑과 밤을 딴은 이름자를
                지나가는 새겨지는 덮어 무성할 잔디가 있습니다. 나는 별에도 써
                비둘기, 된 지나고 이름과, 계십니다. 이 토끼, 딴은 슬퍼하는 오면
                멀리 까닭입니다. 이름자를 새워 나는 라이너 별 이름과 봅니다.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex  border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
