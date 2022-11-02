/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import Head from "next/head";
import { News } from "../../src/types/types";

type Props = {
  post: News
}

const Post = ({ post }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Head>
        <title> {post.title} </title>
      </Head>

      <img
        className='w-full object-cover object-center'
        style={{ height: "calc(70vh - 90px)" }}
        src={urlFor(post.mainImage).url() || ""}
        loading={"lazy"}
        alt=''
      />

      <div className="h-full w-full">
        <article className=' p-5'>
          <h1 className='text-2xl md:text-4xl font-medium font-serif mt-10 mb-3'>{post.title}</h1>
          <div className='text-sm md:text-base font-light font-mono text-gray-400 my-4'>
            Caro Leitor, enquanto estiver apreciando este texto, imagine-se dentro do universo de <b>{post.artwork.name}</b>, de {" "}
            <b>{post.artwork.writter}</b>. Caso deseje conhecer mais sobre a obra, clique{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={post.artwork.link_description}
              className="underline text-indigo-400 hover:text-indigo-700"
            > aqui neste link
            </a> para ser redirecionado a uma página externa explicativa.
          </div>
          <div className='flex items-center space-x-2 md:space'>
            <img
              className='h-10 w-10 rounded-full object-cover'
              src={urlFor(post.author.image).url() || "" || ""}
              alt=''
            />
            <p className='font-extralight text-sm'>
              Done by <span className='text-red-600'>{post.author.name}</span> at {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>

          <div className='mt-10'>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className='text-2xl font-bold my-5' {...props} />
                ),
                h2: (props: any) => (
                  <h2 className='text-xl font-bold my-5' {...props} />
                ),
                li: ({ children }: any) => (
                  <li className='font-bold my-5'> {children} </li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className='underline text-indigo-400 hover:text-indigo-700 font-bold my-5'>
                    {children}
                  </a>
                ),
                image: (props: any) => (
                  <img className='p-2' src={urlFor(props).url() || ""} />
                ),
                normal: (props: any) => (
                  <p className='p-2 text-base sm:text-lg' {...props} />
                ),
              }}
            />
          </div>
        </article>
        <hr className='max-w-lg my-5 mx-auto border border-red-500' />
      </div>


    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type == "info" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    description,
    artwork -> {
      name,
      writter,
      link_description
    },
    author -> {
      name,
      image
    },
    mainImage,
    infoType -> {
      title,
      slug
    },
    body
  }
  `;

  const post = await sanityClient.fetch(query, {
    slug: params?.name
  });

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post: post
    },
    revalidate: 15,
  };
};