import Link from "next/link";
import React from "react";
import { DefaultNews } from "../../types/types";
import Icon from "../Icon/Icon";

const DefaultNews = ({
  title,
  description,
  _createdAt,
  infoType,
  slug,
}: DefaultNews) => {

  return (
    <Link href={`/${infoType.slug}/${slug.current}`}>
      <div
        className="w-full flex flex-col space-y-4 md:space-y-5 lg:space-y-6 p-1 pb-6 sm:pb-8 md:pb-10 lg:pb-12 cursor-pointer
      border-b-[1px] border-solid border-gray-500 hover:bg-gray-100"
      >
        <div className="flex items-center space-x-2">
          <Icon name={infoType.slug} size="30px" />
          <div className="text-[#5e5e5e]"> {infoType.title} </div>
          <div className="pl-2 text-gray-300 hidden sm:flex"> {new Date(_createdAt).toLocaleString()} </div>
        </div>
        <h3
          style={{ lineHeight: 1.1 }}
          className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-serif text-left pl-1"
        > {title} </h3>
        <p
          className="text-sm md:text-base text-[#5e5e5e]"
        > {description ?? ""} </p>
        <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {new Date(_createdAt).toLocaleString()} </span>
      </div>
    </Link>
  );
};

export default DefaultNews;