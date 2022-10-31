import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/animation-wave.json";

export default function AnimationWave() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 720, height: 500 }}
    />
  );
}
