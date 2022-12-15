import React from "react";
import styles from "./info.module.css";

export default function Info() {
  const renderItem = (item) => {
    return (
      <div className={styles["info--item__container"]}>
        <div className={styles["info--logo__container"]}>a</div>
        <div className={styles["info--text__container"]}>a</div>
      </div>
    );
  };
  return (
    <div className={styles["info__wrapper"]}>
      <div className={styles["info__container"]}>{renderItem()}</div>
    </div>
  );
}
