import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Icon from "../src/components/Icon/Icon";
import Headline from "../src/components/JournalComponents/Headline";
import DefaultNews from "../src/components/JournalComponents/DefaultNews";

const Home: NextPage = () => {
  const [newsDate, setNewsDate] = useState("31/10/2022 11:04:37");
  const query = useRouter();

  return (
    <div>
      <Head>
        <title>JMBS</title>
      </Head>

      <div className="w-full p-4 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-6 gap-4">
        <div className="bg-blue-100 md:col-span-2">
          <Headline newsData={{ date: newsDate }} />
        </div>

        <div className="bg-red-100">
          <DefaultNews newsData={{ date: newsDate }} />
        </div>

        <div className="bg-green-100 md:row-span-2">

          <div
            onClick={() => { query.replace("/report"); }}
            className="w-full flex justify-end h-full flex-col bg-[url('https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_960_720.jpg')]
            bg-cover bg-center space-y-4 md:space-y-5 lg:space-y-6 p-6 sm:p-8 md:p-10 lg:p-12 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Icon name="editorial" size="30px" />
              <div className="text-[#5e5e5e]"> Editorial </div>
              <div className="pl-2 text-gray-300 hidden sm:flex"> {newsDate} </div>
            </div>
            <h2
              style={{ lineHeight: 1.1 }}
              className="text-[#eaeaea] text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-serif text-left pl-1"
            > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime, aliquam fugit quisquam similique ab ha! </h2>
            <span className="text-gray-300 pl-1 flex text-sm sm:hidden"> {newsDate} </span>
          </div>

        </div>

        <div className="bg-pink-100">
          <DefaultNews newsData={{ date: newsDate }} />
        </div>
        <div className="bg-purple-100 md:col-span-2">A</div>
        <div className="bg-slate-100 md:row-span-2">A</div>
        <div className="bg-cyan-100">A</div>
        <div className="bg-orange-100">A</div>
      </div>
    </div>
  );
};

export default Home;
