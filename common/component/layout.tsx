import Navbar from "./navbar";
import Footer from "./footer";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full max-w-[80%] mx-auto xl:max-w-screen-lg 2xl:max-w-screen-xl">
      < Navbar />
      {children}
      < Footer />
    </div >
  );
};

export default Layout;
