import Link from "next/link";
import React from "react";
import { urlFor } from "../../../sanity";
import { LineImageNews } from "../../types/types";
import Icon from "../Icon/Icon";

const LineImageNews = ({
  title,
  description,
  _createdAt,
  infoType,
  slug,
  mainImage
}: LineImageNews) => {

  return (
    <Link href={`/${infoType.slug}/${slug.current}`}>
      <div className="w-full flex flex-col space-y-4 h-full items-center justify-between md:flex-row-reverse
    border-b-[1px] border-solid border-gray-500 hover:bg-gray-100">
        <div
          className="flex-1 flex flex-col space-y-4 md:space-y-5 lg:space-y-6 p-1 pb-6 sm:pb-12 md:pb-16 lg:pb-20 cursor-pointer
        "
        >
          <div className="flex items-center space-x-2">
            <Icon name="editorial" size="30px" />
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

        <div className={"flex-1 h-full w-full md:mr-4 min-h-[300px] bg-cover bg-center"}>
          <img
            src={urlFor(mainImage).url()}
            alt={slug.current}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading={"lazy"}
          />
        </div>
      </div>
    </Link>
  );
};

export default LineImageNews;