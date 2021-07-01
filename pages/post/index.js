import styles from "./styles.module.css";

const Component = () => {
  return (
    <div>
      <h1>Post page</h1>
      <p>below-post, in-content-0, in-content-1</p>
      <div className={styles.adSlot} id="below-post"></div>
      <div className={styles.adSlot} id="in-content-0"></div>
      <div className={styles.adSlot} id="in-content-1"></div>
    </div>
  );
};

export default Component;
