import { useRouter } from "next/router";
import React, { useState } from "react";
import Map from "../map/map";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";
import geo from "../../public/languages/geo";
import en from "../../public/languages/en";

export default function Contact() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : geo;
  const [inputErrors, setInputErrors] = useState({});
  const [inputs, setInput] = useState({});
  const handleInput = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let i = 0;
    let errors = {};
    while (i < e.target.length - 2) {
      if (validateInput(e.target[i])) {
        errors[e.target[i].name] = `${
          t.contact[e.target[i].name.toLowerCase()]
        } ${locale === "en" ? "must not be empty" : "არ უნდა იყოს ცარიელი"}`;
      }
      i++;
    }
    setInputErrors(errors);
    checkErrors(e, errors);
  };
  const checkErrors = (e, errors) => {
    if (Object.keys(errors).length === 0) {
      sendEmail(e);
    }
  };
  const validateInput = (input) => {
    if (input.value.length === 0) {
      return `${input.name} must not be empty`;
    }
    return false;
  };
  const sendEmail = (e) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          Email: inputs.Email,
          name: inputs.Name,
          text: inputs.text,
          number: inputs.Phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLICK_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles["contact__wrapper"]}>
      <div className={styles["contact__container"]}>
        <div className={styles["contact--title__container"]}>
          <p>{t.contact.title}</p>
        </div>
        <div className={styles["contact-content__container"]}>
          <Map />
          <div className={styles["contact--form__container"]}>
            <div className={styles["contact--form--title__container"]}>
              <p>{t.contact.title}</p>
            </div>
            <form onSubmit={handleSubmit} className={styles["contact--form"]}>
              <div className={styles["contact--form--input__container"]}>
                <p>{t.contact.name}</p>
                <input
                  placeholder={t.contact.name}
                  name="Name"
                  onChange={handleInput}
                />
                <p>{`${inputErrors["Name"] ? inputErrors["Name"] : " "}`}</p>
              </div>
              <div className={styles["contact--form--input__container"]}>
                <p>{t.contact.phone}</p>
                <input
                  placeholder={t.contact.phone}
                  name="Phone"
                  onChange={handleInput}
                  type={"phone"}
                />
                <p>{`${inputErrors["Phone"] ? inputErrors["Phone"] : " "}`}</p>
              </div>
              <div className={styles["contact--form--input__container"]}>
                <p>{t.contact.email}</p>
                <input
                  placeholder={t.contact.email}
                  name="Email"
                  onChange={handleInput}
                />
                <p>{`${inputErrors["Email"] ? inputErrors["Email"] : " "}`}</p>
              </div>
              <div className={styles["contact--form--input__container"]}>
                <p>{t.contact.text}</p>
                <textarea
                  placeholder={t.contact.text}
                  name="text"
                  onChange={handleInput}
                  maxLength={225}
                  className={styles["contact--form--textarea"]}
                />
              </div>
              <button>{t.contact.send}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
