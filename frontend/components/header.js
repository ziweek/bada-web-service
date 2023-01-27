import Image from "next/image";
import logoTextPic from "../public/logo_horizontal_blue.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            classNameName="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image src={logoTextPic} alt="bada logo" width={150} height={50} />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center py-4 lg:py-0">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/project" className="mr-5 hover:text-gray-900">
              Project
            </Link>
            <Link href="/member" className="mr-5 hover:text-gray-900">
              Member
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact
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
