import styles from "./index.module.scss";

function LoaderComp() {
  return (
    <div className={styles.loader}>
      <span>Loading...</span>
    </div>
  );
}

export default LoaderComp;
