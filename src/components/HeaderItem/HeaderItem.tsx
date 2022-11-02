import React from "react";

interface Props {
  children: string
}

const HeaderItem = (props: Props) => {

  return (
    <div className='px-4 py-2 rounded-lg text-[#5E5E5E] transition-colors linear bg-white border-[1px] border-solid hover:bg-gray-100 cursor-pointer font-mono'>
      {props.children}
    </div>
  );
};

export default HeaderItem;