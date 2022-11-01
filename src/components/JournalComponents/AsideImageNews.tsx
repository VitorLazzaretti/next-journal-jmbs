import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icon/Icon";

const AsideImageNews = ({ newsData }: any) => {
  const query = useRouter();

  return (
    <div
      onClick={() => { query.replace("/report"); }}
      className="min-h-[350px] w-full flex justify-end h-full flex-col bg-[url('https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_960_720.jpg')]
            bg-cover bg-center space-y-4 md:space-y-5 lg:space-y-6 p-6 sm:p-8 md:p-10 lg:p-12 cursor-pointer"
    >
      <div className="flex items-center space-x-2">
        <Icon name="editorial" size="30px" />
        <div className="text-[#5e5e5e]"> Editorial </div>
        <div className="pl-2 text-gray-300 hidden sm:flex"> {newsData?.date} </div>
      </div>
      <h2
        style={{ lineHeight: 1.1 }}
        className="text-[#eaeaea] text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-serif text-left pl-1"
      > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime, aliquam fugit quisquam similique ab ha! </h2>
      <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {newsData?.date} </span>
    </div>
  );
};

export default AsideImageNews;