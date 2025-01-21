import Footer from "../components/Footer";
import Header from "../components/header";

interface LayoutProps {
  children: React.ReactNode; // Type for valid React children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
