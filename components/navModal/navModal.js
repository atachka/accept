import React from "react";
import styles from "./navModal.module.css";
import modalX from "../../public/images/modalX.png";
import Image from "next/image";
export default function NavModal({ isOpen, setIsOpen }) {
  return isOpen ? (
    <div className={styles["navModal__wrapper"]}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          console.log("es?");
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
      </div>
    </div>
  ) : (
    false
  );
}
