import React from "react";
import { useRouter } from "next/router";
import { MenuItemProps } from "../../types/types";
import Icon from "../Icon/Icon";

type props = {
  menuInfo: MenuItemProps;
  selected: boolean;
  open: boolean;
  handleMenu: (x: boolean) => void;
}

const MenuItem = ({ menuInfo, selected, open, handleMenu }: props) => {
  const query = useRouter();

  return (
    <div onClick={() => { query.replace(`${menuInfo.toPage}`); handleMenu(false); }}>
      <div className='w-full flex center justify-start'>
        <div className='w-16 sm:w-24 flex justify-center items-center'>
          <Icon
            name={menuInfo.iconName}
            selected={selected}
          />
        </div>

        <div
          className={`flex-1 ${open ? "flex" : "hidden"} items-center pl-7 ${selected ? "text-[#DB1010]" : "text-[#5E5E5E]"} border-l-[1px] border-solid border-gray-300`}
        >
          {menuInfo.label}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;