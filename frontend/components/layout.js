import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="top-0 w-full">
        <Header className="flex" />
      </div>
      <div>{children}</div>
      <div className="w-full bottom-0">
        <Footer className="flex" />
      </div>
    </>
  );
}
