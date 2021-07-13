import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // const onRouteChangeDone = React.useCallback(() => {
  //   console.log("Page change");

  //   if (!didna) {
  //     return;
  //   }

  //   didna.cmd.push(() => {
  //     didna.removeAdUnits([
  //       "site-leaderboard",
  //       "below-post",
  //       "right-rail",
  //       "in-content-0",
  //       "in-content-1",
  //     ]);
  //     didna.createAdUnits([
  //       {
  //         adUnitPath: "/95386604/infatuation_leaderboard",
  //         id: "site-leaderboard",
  //         size: [[728, 90]],
  //         targeting: { trackid: "site-leaderboard" },
  //       },
  //       {
  //         adUnitPath: "/95386604/infatuation_below_post",
  //         id: "below-post",
  //         size: [[300, 250]],
  //         targeting: { trackid: "below-post" },
  //       },
  //       {
  //         adUnitPath: "/95386604/infatuation_medium_sidebar",
  //         id: "right-rail",
  //         size: [[300, 250]],
  //         targeting: { trackid: "right-rail" },
  //       },
  //       {
  //         adUnitPath: "/95386604/infatuation_in_content",
  //         id: "in-content-0",
  //         size: [[300, 250]],
  //         targeting: { trackid: "in-content-0" },
  //       },
  //       {
  //         adUnitPath: "/95386604/infatuation_in_content",
  //         id: "in-content-1",
  //         size: [[300, 250]],
  //         targeting: { trackid: "in-content-1" },
  //       },
  //     ]);
  //   });
  // }, []);

  // React.useEffect(() => {
  //   router.events.on("routeChangeComplete", onRouteChangeDone);

  //   return () => {
  //     router.events.off("routeChangeComplete", onRouteChangeDone);
  //   };
  // }, [onRouteChangeDone, router.events]);

  return (
    <>
      <Head>
        <script
          async
          type="text/javascript"
          src="https://storage.googleapis.com/didna_hb/the_infatuation_inc/theinfatuation/didna_config.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
