import styles from "./page.module.css";

const LoaderCube = () => {
  return (
    <div className={styles.loaderComponent}>
      <div className={styles.loader}>
        <div className={styles.face + " " + styles.front}></div>
        <div className={styles.face + " " + styles.back}></div>
        <div className={styles.face + " " + styles.left}></div>
        <div className={styles.face + " " + styles.right}></div>
        <div className={styles.face + " " + styles.top}></div>
        <div className={styles.face + " " + styles.bottom}></div>
      </div>
    </div>
  );
};

export default LoaderCube;
