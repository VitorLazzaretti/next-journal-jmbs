import Link from "next/link";
import React from "react";
import { urlFor } from "../../../sanity";
import { AsideImageNews } from "../../types/types";
import Icon from "../Icon/Icon";

const AsideImageNews = ({
  _createdAt,
  infoType,
  slug,
  title,
  mainImage
}: AsideImageNews) => {

  return (
    <Link href={`/${infoType.slug}/${slug.current}`}>
      <div
        className="min-h-[350px] w-full flex justify-end h-[95vh] flex-col bg-cover bg-center space-y-4 md:space-y-5 lg:space-y-6 cursor-pointer"
        style={{ backgroundImage: `url(${urlFor(mainImage).url()})` }}
      >
        <div className="bg-[#00000099] w-full p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex items-center space-x-2">
            <Icon name={infoType.slug} size="30px" color="#eaeaeaf9" />
            <div className="text-[#eaeaeaf9]"> {infoType.title} </div>
            <div className="pl-2 text-gray-500 hidden sm:flex"> {new Date(_createdAt).toLocaleString()} </div>
          </div>
          <h2
            style={{ lineHeight: 1.1 }}
            className="text-[#eaeaeaf9] text-base mt-6 sm:text-lg md:text-xl lg:text-2xl font-medium font-serif text-left pl-1"
          > {title} </h2>
          <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {new Date(_createdAt).toLocaleString()} </span>
        </div>
      </div>
    </Link>
  );
};

export default AsideImageNews;