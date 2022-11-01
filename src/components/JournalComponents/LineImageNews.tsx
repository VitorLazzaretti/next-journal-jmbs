import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icon/Icon";

const LineImageNews = ({ newsData }: any) => {
  const query = useRouter();

  return (
    <div className="w-full flex flex-col space-y-4 h-full items-center justify-between md:flex-row-reverse">
      <div
        onClick={() => { query.replace("/report"); }}
        className="flex-1 flex flex-col space-y-4 md:space-y-5 lg:space-y-6 p-1 pb-6 sm:pb-12 md:pb-16 lg:pb-20 cursor-pointer
        border-b-[1px] border-solid border-gray-500 hover:bg-gray-100"
      >
        <div className="flex items-center space-x-2">
          <Icon name="editorial" size="30px" />
          <div className="text-[#5e5e5e]"> Editorial </div>
          <div className="pl-2 text-gray-300 hidden sm:flex"> {newsData?.date} </div>
        </div>
        <h3
          style={{ lineHeight: 1.1 }}
          className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-serif text-left pl-1"
        > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime! </h3>
        <p
          className="text-sm md:text-base text-[#5e5e5e]"
        > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat totam debitis incidunt? Vero qui assumenda tenetur voluptates iusto, alias earum inventore cum blanditiis laborum recusandae, debitis sunt accusamus? Dolorum, exercitationem. </p>

        <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {newsData?.date} </span>
      </div>

      <div className="flex-1 h-5/6 w-full md:mr-4 bg-orange-500 min-h-[300px] bg-[url('https://cdn.pixabay.com/photo/2022/10/09/04/28/deer-7508187_960_720.jpg')]
            bg-cover bg-center">
      </div>

    </div>
  );
};

export default LineImageNews;