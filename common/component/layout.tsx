import Header from "./header";
import Footer from "./footer";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full max-w-[80%] mx-auto xl:max-w-screen-lg 2xl:max-w-screen-xl">
      < Header />
      {children}
      < Footer />
    </div >
  );
};

export default Layout;
