import React from "react";
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
        <div className={styles.round}>
            <div className={styles.loader}/>
        </div>
    </div>
  );
};

export default Loader;