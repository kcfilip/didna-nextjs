import styles from "./styles.module.css";

const Component = () => {
  return (
    <div>
      <h1>Infatuation ad-slots</h1>
      <p>
        storage.googleapis.com/didna_hb/the_infatuation_inc/theinfatuation/didna_config.js
      </p>
      <div className={styles.adSlot} id="site-leaderboard"></div>
      <div className={styles.adSlot} id="below-post"></div>
      <div className={styles.adSlot} id="right-rail"></div>
      <div className={styles.adSlot} id="in-content-0"></div>
      <div className={styles.adSlot} id="in-content-1"></div>
    </div>
  );
};

export default Component;
