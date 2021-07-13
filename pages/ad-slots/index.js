import styles from "./styles.module.css";
import Link from "next/link";

import AdProvider from "../../components/AdProvider";

const Component = () => {
  return (
    <AdProvider
      adList={[
        "site-leaderboard",
        "below-post",
        "right-rail",
        "in-content-0",
        "in-content-1",
      ]}
    >
      <Link href="/post">
        <a>Go to page 2</a>
      </Link>
      <h1>Infatuation ad-slots</h1>
      <p>site-leaderboard</p>
      <div className={styles.adSlot} id="site-leaderboard"></div>
      {/* <p>site-leaderboard 2</p>
      <div className={styles.adSlot} id="site-leaderboard"></div>
      <p>site-leaderboard 3</p>
      <div className={styles.adSlot} id="site-leaderboard"></div> */}
      <p>below-post</p>
      <div className={styles.adSlot} id="below-post"></div>
      <p>right-rail</p>
      <div className={styles.adSlot} id="right-rail"></div>
      <p>in-content-0</p>
      <div className={styles.adSlot} id="in-content-0"></div>
      <p>in-content-1</p>
      <div className={styles.adSlot} id="in-content-1"></div>
    </AdProvider>
  );
};

export default Component;
