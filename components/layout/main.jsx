import React from "react";
import Header from "../common/header";
// import dynamic from "next/dynamic";

// const Header = dynamic(() => import("../common/header"), {
//   ssr: false,
// });

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
