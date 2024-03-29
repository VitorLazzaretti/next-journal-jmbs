import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../src/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
