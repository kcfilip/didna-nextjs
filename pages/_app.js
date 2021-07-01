import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          type="text/javascript"
          src="//storage.googleapis.com/didna_hb/the_infatuation_inc/theinfatuation/didna_config.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
