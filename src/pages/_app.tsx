import { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';

import { chakraTheme } from 'styles/chakraTheme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nutrisoft</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Nutrisoft" />
      </Head>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
