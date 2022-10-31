import Image from "next/image";
import logoTextPic from "../public/logo_horizontal_blue.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div>
        <header className="bg-primary text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-row items-start md:items-center">
            <Link
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <Image
                src={logoTextPic}
                alt="bada logo"
                width={150}
                height={50}
              />
            </Link>
            <nav className="invisible md:visible md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/" className="mr-5 dark:hover:text-white">
                Home
              </Link>
              <Link href="/project" className="mr-5 dark:hover:text-white">
                Project
              </Link>
              <Link href="/member" className="mr-5 dark:hover:text-white">
                Member
              </Link>
              <Link href="/" className="mr-5 dark:hover:text-white">
                Contact
              </Link>
            </nav>
            <button className="invisible md:visible inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
              Sign In
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
