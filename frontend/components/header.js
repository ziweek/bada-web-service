import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import logoTextPic from "../public/logo_horizontal_blue.png";
import Link from "next/link";
import { useEffect } from "react";
import { User } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function Header() {
  const { data: session, status } = useSession();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <header className="bg-primary text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="inline-flex flex-row w-full justify-between items-center">
            <Link
              href="/"
              className="flex title-font font-medium items-center justify-center text-gray-900 mb-4"
            >
              <Image
                src={logoTextPic}
                alt="bada logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            {/* <Link
              href="/login"
              className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 mr-2"
            > */}
            {status === "authenticated" ? (
              // <User src={session.user.image} size="lg" />
              <Link
                href="/profile"
                className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 mr-2"
              >
                <Image
                  width={96}
                  height={96}
                  class="w-10 h-10 rounded-full"
                  src={session.user.image}
                  alt="Rounded avatar"
                />
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#3B82F6"
                  className="h-8 w-12"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
                  </g>
                </svg>
              </Link>
            )}
            {/* </Link> */}
          </div>
          <nav className="md:ml-auto inline-flex flex-row items-start text-base justify-between lg:justify-end w-full">
            <div className="inline-flex flex-col items-center mx-4">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              {/* <div className="h-1 w-12 bg-blue-300 mt-1"> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#3B82F6"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg> */}
            </div>
            <div className="inline-flex flex-col items-center mx-4">
              <Link href="/activity" className="hover:text-gray-900">
                Activity
              </Link>
              {/* <div className="h-1 w-12 bg-blue-300 mt-1"></div> */}
            </div>
            <div className="inline-flex flex-col items-center mx-4">
              <Link href="/member" className="hover:text-gray-900">
                Member
              </Link>
              {/* <div className="h-1 w-12 bg-blue-300 mt-1"></div> */}
            </div>
            <div className="inline-flex flex-col items-center mx-4">
              <Link href="/recruit" className="hover:text-gray-900">
                Recruit
              </Link>
              {/* <div className="h-1 w-12 bg-blue-300 mt-1"></div> */}
            </div>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Log In
          </button> */}
        </div>
      </header>
    </>
  );
}
