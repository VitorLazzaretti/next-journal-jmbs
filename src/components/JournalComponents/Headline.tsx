import Link from "next/link";
import React from "react";
import { HeadlineNews } from "../../types/types";
import Icon from "../Icon/Icon";

const Headline = ({ infoType, _createdAt, slug, title }: HeadlineNews) => {

  return (
    <Link href={`/${infoType.slug}/${slug.current}`}>
      <div
        className="w-full flex flex-col space-y-4 md:space-y-5 lg:space-y-6 p-1 pb-8 sm:pb-16 md:pb-20 lg:pb-24 cursor-pointer
      border-b-[1px] border-solid border-gray-500 hover:bg-gray-100"
      >
        <div className="flex items-center space-x-2">
          <Icon name={infoType.slug} size="30px" />
          <div className="text-[#5e5e5e]"> {infoType.title} </div>
          <div className="pl-2 text-gray-300 hidden sm:flex"> {new Date(_createdAt).toLocaleString()} </div>
        </div>
        <h2
          style={{ lineHeight: 1.1 }}
          className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-left pl-1"
        > {title} </h2>
        <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {new Date(_createdAt).toLocaleString()} </span>
      </div>
    </Link>
  );
};

export default Headline;