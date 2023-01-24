import React from "react";
import styles from "./service.module.css";
import geo from "../../public/languages/geo";
import { useRouter } from "next/router";
import en from "../../public/languages/en";
import Service1 from "../../public/images/Service1.png";
import Service2 from "../../public/images/Service2.png";
import Service3 from "../../public/images/Service3.png";
import Service4 from "../../public/images/Service4.png";

export default function Service() {
  const renderItem = (index, item) => {
    return (
      <div key={index} className={styles["service--item__container"]}>
        <div className={styles["service--item--image__container"]}>
          <img src={`/images/Service${index + 1}.png`} alt="" />
        </div>
        <div className={styles["service--item--content__container"]}>
          <p className={styles["service--item--content--title"]}>
            {item.title}
          </p>
          <p className={styles["service--item--content--description"]}>
            {item.description}
          </p>
        </div>
      </div>
    );
  };
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : geo;
  return (
    <div className={styles["service__wrapper"]}>
      <div className={styles["service__container"]}>
        <div className={styles["service--title__container"]}>
          <p>სერვისები</p>
        </div>
        <div className={styles["service--items__container"]}>
          {t.service.map((item, index) => renderItem(index, item))}
        </div>
      </div>
    </div>
  );
}
