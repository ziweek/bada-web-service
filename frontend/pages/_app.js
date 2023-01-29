import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// 1. import `NextUIProvider` component

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      // 2. Use at the root of your app
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  );
}

export default MyApp;
