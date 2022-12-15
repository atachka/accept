import React from "react";
import styles from "./info.module.css";
import bulbImage from "../../public/images/infoBulb.png";
import bookImage from "../../public/images/infoBook.png";
import calcImage from "../../public/images/infoCalc.png";
import Image from "next/image";
import geo from "../../public/languages/geo";
import { useRouter } from "next/router";
import en from "../../public/languages/en";
export default function Info() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : geo;
  const renderItem = (logo, title, text) => {
    return (
      <div className={styles["info--item__container"]}>
        <div className={styles["info--logo__container"]}>
          <Image src={logo} alt="" />
        </div>
        <div className={styles["info--text__container"]}>
          <p className={styles["info--text--title"]}> {title}</p>
          <p className={styles["info--text--description"]}>{text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles["info__wrapper"]}>
      <div className={styles["info__container"]}>
        {renderItem(bulbImage, t.info.title1, t.info.description1)}
        {renderItem(bookImage, t.info.title2, t.info.description2)}
        {renderItem(calcImage, t.info.title3, t.info.description3)}
      </div>
    </div>
  );
}
