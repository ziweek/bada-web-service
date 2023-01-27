import Image from "next/image";
import logoTextPic from "../public/logo_horizontal_blue.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-primary text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="inline-flex flex-row w-full justify-between">
            <Link
              href="/"
              className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0"
            >
              <Image
                src={logoTextPic}
                alt="bada logo"
                width={150}
                height={50}
              />
            </Link>
            <Link
              href="/"
              className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0  mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
                className="h-8 w-8"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
                </g>
              </svg>
            </Link>
          </div>
          <nav className="md:ml-auto inline-flex flex-row items-center text-base justify-between w-full px-4">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/activity" className="hover:text-gray-900">
              Activity
            </Link>
            <Link href="/member" className="hover:text-gray-900">
              Member
            </Link>
            <Link href="/recruit" className="hover:text-gray-900">
              Recruit
            </Link>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Log In
          </button> */}
        </div>
      </header>
    </>
  );
}
