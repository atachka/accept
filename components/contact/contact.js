import React, { useState } from "react";
import Map from "../map/map";
import styles from "./contact.module.css";
export default function Contact() {
  const [state, setState] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let i = 0;
    let errors = {};
    while (i < e.target.length - 2) {
      if (validateInput(e.target[i])) {
        errors[e.target[i].name] = `${e.target[i].name} must not be empty`;
      }
      i++;
    }
    setInputErrors(errors);
    console.log(inputErrors);
  };
  const validateInput = (input) => {
    if (input.value.length === 0) {
      return `${input.name} must not be empty`;
    }
    return false;
  };
  return (
    <div className={styles["contact__wrapper"]}>
      <div className={styles["contact__container"]}>
        <div className={styles["contact--title__container"]}>
          <p>დაგვიკავშირდით</p>
        </div>
        <div className={styles["contact-content__container"]}>
          <Map />
          <div className={styles["contact--form__container"]}>
            <div className={styles["contact--form--title__container"]}>
              <p>დაგვიკავშირდით</p>
            </div>
            <form onSubmit={handleSubmit} className={styles["contact--form"]}>
              <div className={styles["contact--form--input__container"]}>
                <p>სახელი</p>
                <input name="Name" />
                <p>{`${inputErrors["Name"] ? inputErrors["Name"] : " "}`}</p>
              </div>
              <div className={styles["contact--form--input__container"]}>
                <p>telefoni</p>
                <input name="Phone" type={"phone"} />
                <p>{`${inputErrors["Phone"] ? inputErrors["Phone"] : " "}`}</p>
              </div>
              <div className={styles["contact--form--input__container"]}>
                <p>სახელი</p>
                <input name="Email" />
                <p>{`${inputErrors["Email"] ? inputErrors["Email"] : " "}`}</p>
              </div>
              <div className={styles["contact--form--input__container"]}>
                <p>სახელი</p>
                <textarea
                  maxLength={225}
                  className={styles["contact--form--textarea"]}
                />
              </div>
              <button>გაგზავნა</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
