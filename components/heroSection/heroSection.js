import React from "react";
import styles from "./heroSection.module.css";
import geo from "../../public/languages/geo";
import en from "../../public/languages/en";
import { useRouter } from "next/router";
export default function HeroSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : geo;
  return (
    <main className={styles["heroSection__wrapper"]}>
      <article
        itemScope
        itemType="https://schema.org/Article"
        className={styles["heroSection__container"]}
        id="heroSection__container"
      >
        <div
          className={`${styles["heroSection--text--first__container"]} ${styles["heroSection--text__container"]}`}
        >
          <p>{t.hero.first}</p>
        </div>
        <div
          className={`${styles["heroSection--text--second__container"]} ${styles["heroSection--text__container"]}`}
        >
          <p>{t.hero.second}</p>
        </div>
        <div
          className={`${styles["heroSection--text--third__container"]} ${styles["heroSection--text__container"]}`}
        >
          <p>{t.hero.third}</p>
        </div>
      </article>
    </main>
  );
}
