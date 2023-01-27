import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col items-center justify-between relative h-[100vh]">
        <div className="max-w-6xl top-0 w-full">
          <Header className="flex" />
        </div>
        <div className="max-w-6xl mx-3 lg:mx-auto">{children}</div>
        <div className="max-w-6xl w-full bottom-0">
          <Footer className="flex" />
        </div>
      </div>
    </>
  );
}
