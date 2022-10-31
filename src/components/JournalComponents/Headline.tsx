import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icon/Icon";

const Headline = ({ newsData }: any) => {
  const query = useRouter();

  return (
    <div
      onClick={() => { query.replace("/report"); }}
      className="w-full flex flex-col space-y-4 md:space-y-5 lg:space-y-6 p-1 pb-8 sm:pb-16 md:pb-20 lg:pb-24 cursor-pointer"
    >
      <div className="flex items-center space-x-2">
        <Icon name="editorial" size="30px" />
        <div className="text-[#5e5e5e]"> Editorial </div>
        <div className="pl-2 text-gray-300 hidden sm:flex"> {newsData?.date} </div>
      </div>
      <h2
        style={{ lineHeight: 1.1 }}
        className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-left pl-1"
      > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime, aliquam fugit quisquam similique ab ha! </h2>
      <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {newsData?.date} </span>
    </div>
  );
};

export default Headline;