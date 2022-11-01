import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Icon from "../src/components/Icon/Icon";
import Headline from "../src/components/JournalComponents/Headline";
import DefaultNews from "../src/components/JournalComponents/DefaultNews";
import AsideImageNews from "../src/components/JournalComponents/AsideImageNews";
import LineImageNews from "../src/components/JournalComponents/LineImageNews";

const Home: NextPage = () => {
  const [newsDate, setNewsDate] = useState("31/10/2022 11:04:37");
  const query = useRouter();

  return (
    <div>
      <Head>
        <title>JMBS</title>
      </Head>

      <div className="w-full p-4 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-6 gap-4">
        <div className="md:col-span-2">
          <Headline newsData={{ date: newsDate }} />
        </div>

        <div>
          <DefaultNews newsData={{ date: newsDate }} />
        </div>

        <div className="md:row-span-2">
          <AsideImageNews newsData={{ date: newsDate }} />
        </div>

        <div>
          <DefaultNews newsData={{ date: newsDate }} />
        </div>

        <div>
          <DefaultNews newsData={{ date: newsDate }} />
        </div>

        <div>
          <DefaultNews newsData={{ date: newsDate }} />
        </div>

        <div className="md:col-span-2">
          <LineImageNews newsData={{ date: newsDate }} />
        </div>

        <div>
          <DefaultNews newsData={{ date: newsDate }} />
        </div>

        <div>
          <DefaultNews newsData={{ date: newsDate }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
