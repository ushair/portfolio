"use client";
import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderBanner from "./HeaderBanner";
import HeaderCTA from "./HeaderCTA";
import HeaderBg from "./HeaderBg";

const Header: React.FC = () => {
  return (
    <header className="relative header">
      <HeaderBg />
      <HeaderNav />
      <HeaderBanner />
      <HeaderCTA />
    </header>
  );
};

export default Header;
