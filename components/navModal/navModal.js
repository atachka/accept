import React from "react";
import styles from "./navModal.module.css";
import modalX from "../../public/images/modalX.png";
import Image from "next/image";
import House from "../../public/images/House.png";
import Gears from "../../public/images/Gears.png";
import Info from "../../public/images/Info.png";
import Question from "../../public/images/Question.png";
import GlobeBlack from "../../public/images/GlobeBlack.png";
export default function NavModal({ isOpen, setIsOpen }) {
  const handleClick = (item) => {
    setIsOpen(false);
    const element = document.getElementById("service__container");
    console.log(element);
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
            onClick={handleClick}
            style={{ top: "0" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={House} alt="" />
            მთავარი
          </div>
          <div
            style={{ top: "50px" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={Gears} alt="" />
            სერვისები
          </div>
          <div
            style={{ top: "100px" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={Info} alt="" />
            ჩვენს შესახებ
          </div>
          <div
            style={{ top: "150px" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={Question} alt="" />
            კონტაქტი
          </div>
          <div
            style={{ top: "200px" }}
            className={styles["navModal-item__container"]}
          >
            <Image src={GlobeBlack} alt="" />
            ენის შეცვლა
          </div>
        </div>
      </div>
    </div>
  ) : (
    false
  );
}
