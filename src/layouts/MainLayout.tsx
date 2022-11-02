import React, { useState } from "react";
import AsideMenu from "../components/AsideMenu/AsideMenu";
import Header from "../components/Header/Header";

interface Props {
  children: JSX.Element
}

const MainLayout = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (state: boolean) => {
    setIsMenuOpen(state);
  };

  return (
    <div className='w-full min-h-screen'>
      <div
        style={{
          width: "calc(100% - 96px)",
          marginLeft: "96px"
        }}
      >
        <Header />
        <main className="max-w-7xl m-auto pt-4 justify-center">
          {children}
        </main>
        <AsideMenu open={isMenuOpen} handleMenu={handleMenu} />
      </div>
    </div>
  );
};

export default MainLayout;