import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
        <title>Andrew Chen</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
