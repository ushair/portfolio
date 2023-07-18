import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderBanner from "./HeaderBanner";
import HeaderCTA from "./HeaderCTA";
import HeaderBg from "./HeaderBg";
import Header3dIcons from "./Header3dIcons";

const Header: React.FC = () => {
  return (
    <header className="container relative flex flex-col header">
      <Header3dIcons />
      <HeaderBg />
      <HeaderNav />
      <HeaderBanner />
      <HeaderCTA />
    </header>
  );
};

export default Header;
