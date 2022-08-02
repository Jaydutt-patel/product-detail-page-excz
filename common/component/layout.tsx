import Navbar from "./navbar";
import Footer from "./footer";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="m-6">
      < Navbar />
      {children}
      < Footer />
    </div >
  );
};

export default Layout;
