import React from "react";
import Logo from "./Logo";
import { Navigation } from "./Navigation";

type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <>
      <header className="border-b border-border">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center py-5 max-w-screen-lg mx-auto">
          <Logo />
          <Navigation></Navigation>
        </div>
      </header>
    </>
  );
}

export default Header;
