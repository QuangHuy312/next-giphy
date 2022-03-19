import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../common/header"), {
  ssr: false,
});

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
