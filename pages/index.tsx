import React from "react";
import Head from "next/head";
import Headline from "../src/components/JournalComponents/Headline";
import DefaultNews from "../src/components/JournalComponents/DefaultNews";
import AsideImageNews from "../src/components/JournalComponents/AsideImageNews";
import LineImageNews from "../src/components/JournalComponents/LineImageNews";
import { sanityClient } from "../sanity";
import { News } from "../src/types/types";

import type { GetServerSideProps } from "next";

type Props = {
  news: News[]
}

const Home = ({ news }: Props) => {
  return (
    <>
      <Head>
        <title>JMBS</title>
      </Head>

      <div className={`w-full p-4 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 sm:pt-4 md:pt-4
      lg:pt-4 grid-rows-8 md:grid-cols-2 md:grid-rows-${news.length} gap-4 items-end`}>
        {news.map((info, index) => {
          if (index == 0) {
            return (
              <div key={info._id} className="md:col-span-2">
                <Headline
                  _createdAt={info._createdAt}
                  infoType={info.infoType}
                  slug={info.slug}
                  title={info.title}
                />
              </div>
            );
          }

          if (index == 2) {
            return (
              <div key={info._id} className="md:row-span-2">
                <AsideImageNews
                  _createdAt={info._createdAt}
                  infoType={info.infoType}
                  slug={info.slug}
                  title={info.title}
                  mainImage={info.mainImage}
                />
              </div>
            );
          }

          if (index == 6) {
            return (
              <div key={info._id} className="md:col-span-2">
                <LineImageNews
                  _createdAt={info._createdAt}
                  infoType={info.infoType}
                  slug={info.slug}
                  title={info.title}
                  description={info?.description}
                  mainImage={info.mainImage}
                />
              </div>
            );
          }

          return (
            <div key={info._id} className="">
              <DefaultNews
                _createdAt={info._createdAt}
                infoType={info.infoType}
                slug={info.slug}
                title={info.title}
                description={info?.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
  *[_type == "info"] {
    _id,
    title,
    slug,
    infoType -> {
      title,
      slug
    },
    description,
    mainImage,
    _createdAt
  }`;

  const news = await sanityClient.fetch(query);

  return {
    props: {
      news
    },
  };
};

export default Home;
