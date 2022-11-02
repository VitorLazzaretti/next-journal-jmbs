import { useRouter } from "next/router";
import React from "react";
import CONSTANTS from "../../core/CONSTANTS";
import Logo from "../Logo/Logo";
import MenuItem from "../MenuItem/MenuItem";

type Props = {
  open: boolean;
  handleMenu: (state: boolean) => void;
};

const AsideMenu = ({ open, handleMenu }: Props) => {
  const { query } = useRouter();
  const slug = query?.slug || "world";

  const menuOptions = CONSTANTS.MenuOptions;

  return (
    <aside
      onMouseOver={() => {
        handleMenu(true);
      }}
      onMouseOut={() => {
        handleMenu(false);
      }}
      className={`${open ? "w-96" : "w-16 sm:w-24"} h-screen fixed z-50 top-0 left-0 bg-white shadow-lg flex flex-col space-y-6`}>
      <div className={"h-20 w-24 hidden lg:flex items-center justify-center"}>
        <Logo />
      </div>
      <div
        onClick={() => {
          handleMenu(!open);
        }}
        className={"h-10 w-16 sm:w-24 lg:hidden flex flex-col justify-evenly items-center"}
      >
        <div className="w-10 h-[2px] bg-[#DB1010]"></div>
        <div className="w-10 h-[2px] bg-[#DB1010]"></div>
        <div className="w-10 h-[2px] bg-[#DB1010]"></div>
      </div>
      {menuOptions.map(value => (
        <MenuItem
          key={value.label}
          menuInfo={{
            toPage: value.toPage,
            iconName: value.iconName,
            label: value.label,
          }}
          selected={slug === value.iconName ?? false}
          open={open}
          handleMenu={handleMenu}
        />
      ))}
    </aside>
  );
};

export default AsideMenu;
