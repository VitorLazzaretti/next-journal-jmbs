import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icon/Icon";

const DefaultNews = ({ newsData }: any) => {
  const query = useRouter();

  return (
    <div
      onClick={() => { query.replace("/report"); }}
      className="w-full flex flex-col space-y-4 md:space-y-5 lg:space-y-6 p-1 pb-6 sm:pb-12 md:pb-16 lg:pb-20 cursor-pointer"
    >
      <div className="flex items-center space-x-2">
        <Icon name="editorial" size="30px" />
        <div className="text-[#5e5e5e]"> Editorial </div>
        <div className="pl-2 text-gray-300 hidden sm:flex"> {newsData.date} </div>
      </div>
      <h3
        style={{ lineHeight: 1.1 }}
        className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-serif text-left pl-1"
      > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime! </h3>
      <p
        className="text-sm md:text-base text-[#5e5e5e]"
      > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat totam debitis incidunt? Vero qui assumenda tenetur voluptates iusto, alias earum inventore cum blanditiis laborum recusandae, debitis sunt accusamus? Dolorum, exercitationem. </p>

      <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {newsData.date} </span>
    </div>
  );
};

export default DefaultNews;