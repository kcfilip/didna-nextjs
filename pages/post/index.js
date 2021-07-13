import styles from "./styles.module.css";
import Link from "next/link";

import AdProvider from "../../components/AdProvider";

const Component = () => {
  return (
    <AdProvider adList={["below-post", "in-content-0", "in-content-1"]}>
      <Link href="/ad-slots">
        <a>Go to page 1</a>
      </Link>
      <h1>Post page</h1>
      <p>below-post</p>
      <div className={styles.adSlot} id="below-post"></div>
      <p>in-content-0</p>
      <div className={styles.adSlot} id="in-content-0"></div>
      <p>in-content-1</p>
      <div className={styles.adSlot} id="in-content-1"></div>
    </AdProvider>
  );
};

export default Component;
