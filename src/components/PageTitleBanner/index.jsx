import styles from "./index.module.scss";

function PageTitleBanner({ title }) {
  return (
    <div className="col-md-12 text-center">
      <div className={styles.titleWrapper}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default PageTitleBanner;
