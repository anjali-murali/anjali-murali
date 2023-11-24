// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from "next-themes";

import Layout from '../components/Layout';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
