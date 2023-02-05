import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col items-center justify-between relative h-[100vh]">
        <div className="sticky max-w-6xl top-0 w-full z-10">
          <Header className="flex" />
        </div>
        <div className="max-w-6xl mx-3 w-screen lg:mx-auto z-0 px-5">
          {children}
        </div>
        <div className="max-w-6xl w-full bottom-0">
          <Footer className="flex" />
        </div>
      </div>
    </>
  );
}
