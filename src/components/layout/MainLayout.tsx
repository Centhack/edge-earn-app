
import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
