import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Icon from "../src/components/Icon/Icon";

const Home: NextPage = () => {
  const query = useRouter();

  return (
    <div>
      <Head>
        <title>JMBS</title>
      </Head>
      <div className="w-full p-4 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-6 md:gap-4">


        <div className="bg-blue-100 md:col-span-2">
          <div
            onClick={() => { query.replace("/report"); }}
            className="w-full flex flex-col space-y-4 md:space-y-5 lg:space-y-6 p-1 pb-8 sm:pb-16 md:pb-20 lg:pb-24 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Icon name="editorial" size="30px" />
              <div className="text-[#5e5e5e]"> Editorial </div>
              <div className="pl-2 text-gray-300 hidden sm:flex"> {new Date().toLocaleString()} </div>
            </div>
            <div
              style={{ lineHeight: 1.1 }}
              className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-left pl-1"
            > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto maxime, aliquam fugit quisquam similique ab ha! </div>
            <div className="text-gray-300 pl-1 flex text-sm sm:hidden"> {new Date().toLocaleString()} </div>
          </div>
        </div>


        <div className="bg-red-100">A</div>
        <div className="bg-green-100 md:row-span-2">A</div>
        <div className="bg-pink-100">A</div>
        <div className="bg-purple-100 md:col-span-2">A</div>
        <div className="bg-slate-100 md:row-span-2">A</div>
        <div className="bg-cyan-100">A</div>
        <div className="bg-orange-100">A</div>
      </div>
    </div>
  );
};

export default Home;
