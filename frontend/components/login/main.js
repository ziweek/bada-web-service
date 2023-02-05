import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoImg from "../../public/logo_rectangle_vertical_blue_transparent.png";

export default function LoginMain() {
  const { data: session } = useSession();
  const [isOpenLoginDetail, setisOpenLoginDetail] = useState(false);

  useEffect(() => {}, []);

  const login = async () => {
    await signIn("google", { callbackUrl: "/register" });
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <a
            href="/"
            className="flex items-center justify-center text-2xl font-semibold text-gray-900"
          >
            <Image
              src={logoImg}
              className="md:w-1/2 xl:w-1/3 opacity-0"
              alt="logo"
              priority
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                계정으로 로그인하기
              </h1>
              <div className="py-1">
                <button
                  onClick={login}
                  type="button"
                  className="inline-flex justify-center w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
              </div>
              <details>
                <summary
                  className="bg-white flex justify-center text-gray-400 text-sm"
                  onClick={() => setisOpenLoginDetail(!isOpenLoginDetail)}
                >
                  이메일로 로그인하기
                </summary>
                <form className="bg-white space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required=""
                    />
                  </div>
                  <div className="py-2">
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      로그인
                    </button>
                  </div>
                </form>
              </details>
            </div>
          </div>
          {isOpenLoginDetail ? null : (
            <Image
              src={logoImg}
              className="md:w-1/2 opacity-0"
              alt="logo"
              priority
            />
          )}
        </div>
      </section>
    </>
  );
}
