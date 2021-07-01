import styles from "./styles.module.css";

const Component = () => {
  return (
    <div>
      <h1>Infatuation ad-slots</h1>
      <p>site-leaderboard</p>
      <div className={styles.adSlot} id="site-leaderboard"></div>
      <p>below-post</p>
      <div className={styles.adSlot} id="below-post"></div>
      <p>right-rail</p>
      <div className={styles.adSlot} id="right-rail"></div>
      <p>in-content-0</p>
      <div className={styles.adSlot} id="in-content-0"></div>
      <p>in-content-1</p>
      <div className={styles.adSlot} id="in-content-1"></div>
    </div>
  );
};

export default Component;
