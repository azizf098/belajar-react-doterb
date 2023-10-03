import { Navbar } from "@material-tailwind/react";
import React from "react";
import Header from "../pages/landing-page/index";
import Footer from "../pages/landing-page/components/footer/index";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
