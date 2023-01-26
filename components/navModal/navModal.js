import React from "react";
import { useRouter } from "next/router";
import styles from "./navModal.module.css";
import modalX from "../../public/images/modalX.png";
import geo from "../../public/languages/geo";
import en from "../../public/languages/en";
import Image from "next/image";
import House from "../../public/images/House.png";
import Gears from "../../public/images/Gears.png";
import Info from "../../public/images/Info.png";
import Question from "../../public/images/Question.png";
import GlobeBlack from "../../public/images/GlobeBlack.png";
export default function NavModal({ isOpen, setIsOpen }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : geo;
  const handleLanguage = (e) => {
    setIsOpen(false);
    router.push(router.asPath, undefined, {
      locale: locale === "en" ? "geo" : "en",
    });
  };
  // const t = locale === "en" ? en : geo;
  const handleClick = (e) => {
    setIsOpen(false);
    const element = document.getElementById(
      e.target.getAttribute("scrollname") + "__container"
    );
    element.scrollIntoView({ behavior: "smooth" });
  };
  return isOpen ? (
    <div className={styles["navModal__wrapper"]}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${styles["navModal__container"]} ${
          isOpen ? styles["openModal"] : ""
        }`}
      >
        <Image
          src={modalX}
          alt=""
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div className={styles["navModal-items__container"]}>
          <div
            scrollname="heroSection"
            onClick={handleClick}
            style={{ top: "0" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={House} alt="" />
            {t.navModal.main}
          </div>

          <div
            scrollname="info"
            onClick={handleClick}
            style={{ top: "50px" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={Info} alt="" />
            {t.navModal.aboutUs}
          </div>
          <div
            scrollname="service"
            onClick={handleClick}
            style={{ top: "100px" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={Gears} alt="" />
            {t.navModal.services}
          </div>
          <div
            scrollname="contact"
            onClick={handleClick}
            style={{ top: "150px" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={Question} alt="" />
            {t.navModal.contact}
          </div>
          <div
            style={{ top: "200px" }}
            onClick={handleLanguage}
            className={styles["navModal-item__container"]}
          >
            <Image src={GlobeBlack} alt="" />
            {t.navModal.changeLan}
          </div>
        </div>
      </div>
    </div>
  ) : (
    false
  );
}
