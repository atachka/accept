import { useRouter } from "next/router";
import React from "react";
import styles from "./header.module.css";
import geo from "../../public/languages/geo";
import en from "../../public/languages/en";
import burgerMenu from "../../public/images/burgerMenu.png";
import Image from "next/image";
export default function Header({ setIsOpen }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : geo;

  return (
    <header className={styles["header__container"]}>
      <div className={styles["header--left__container"]}>
        <p className={"header--left--text"}>Accept</p>
      </div>
      <div className={styles["header--right__container"]}>
        <div className={styles["header--right--text__container"]}>
          <p>{t.header.main}</p>
        </div>
        <div className={styles["header--right--text__container"]}>
          <p>{t.header.services}</p>
        </div>
        <div className={styles["header--right--text__container"]}>
          <p>{t.header.about}</p>
        </div>
        <div
          className={`${styles["header--right--text__container"]} ${styles["book"]}`}
        >
          <p>{t.header.about}</p>
        </div>
        <Image
          onClick={() => {
            setIsOpen(true);
          }}
          src={burgerMenu}
          alt=""
        />
      </div>
    </header>
  );
}
