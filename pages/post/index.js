import styles from "./styles.module.css";

const Component = () => {
  return (
    <div>
      <h1>Post page</h1>
      <p>below-post</p>
      <div className={styles.adSlot} id="below-post"></div>
      <p>in-content-0</p>
      <div className={styles.adSlot} id="in-content-0"></div>
      <p>in-content-1</p>
      <div className={styles.adSlot} id="in-content-1"></div>
    </div>
  );
};

export default Component;
