import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'src/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
