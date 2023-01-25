import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./footer.module.css";
import emailjs from "@emailjs/browser";
import geo from "../../public/languages/geo";
import en from "../../public/languages/en";
import Image from "next/image";
import Globe from "../../public/images/Globe.png";
import TopButton from "../../public/images/TopButtonIcon.png";
export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : geo;

  const onOpenPage = (page) => {
    window.open(`https://${page}`, "_blank", "noreferrer");
  };
  const onChangeLanguage = (e) => {
    e.preventDefault();
    router.push(router.asPath, undefined, {
      locale: locale === "en" ? "geo" : "en",
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles["footer__wrapper"]}>
      <div className={styles["footer__container"]}>
        <div
          className={
            styles["footer-info__container"] +
            " " +
            (locale === "en" ? styles["addGap"] : " ")
          }
        >
          <div className={styles["footer-info-item__container"]}>
            <p className={styles["footer-info-item-title"]}>
              {t.footer.contact.title}
            </p>
            <div className={styles["footer-info-item-content__container"]}>
              <div className={styles["footer-info-contact-item__container"]}>
                <p> {t.footer.contact.addressTitle}</p>
                <p> {t.footer.contact.address}</p>
              </div>
              <div className={styles["footer-info-contact-item__container"]}>
                <p> {t.footer.contact.emailTitle}</p>
                <p> {t.footer.contact.email}</p>
              </div>
              <div className={styles["footer-info-contact-item__container"]}>
                <p> {t.footer.contact.phoneTitle}</p>
                <p> {t.footer.contact.phone}</p>
              </div>
            </div>
          </div>
          <div className={styles["footer-info-item__container"]}>
            <p className={styles["footer-info-item-title"]}>
              {t.footer.links.title}
            </p>
            <div className={styles["footer-info-item-content__container"]}>
              <p onClick={() => onOpenPage("www.rs.ge")}>{t.footer.links.rs}</p>
              <p onClick={() => onOpenPage("www.gfpaa.ge")}>
                {t.footer.links.accountingAssociation}
              </p>
              <p onClick={() => onOpenPage("saras.gov.ge")}>
                {t.footer.links.accountingService}
              </p>
            </div>
          </div>
          <div className={styles["footer-info-item__container"]}>
            <p className={styles["footer-info-item-title"]}>
              {" "}
              {t.footer.services.title}
            </p>
            <div className={styles["footer-info-item-content__container"]}>
              <p> {t.footer.services.consulting}</p>
              <p> {t.footer.services.audit}</p>
              <p> {t.footer.services.accounting}</p>
              <p> {t.footer.services.appraising}</p>
            </div>
          </div>
        </div>
        <div className={styles["footer-bottom__container"]}>
          <div className={styles["footer-bottom-items__container"]}>
            <p>{t.footer.bottom.allRights} &nbsp;ⓒ &nbsp; 2022</p>
            <div className={styles["footer-bottom-items-right__container"]}>
              <div
                onClick={onChangeLanguage}
                className={styles["footer-bottom-item__container"]}
              >
                <Image src={Globe} alt="" />
                {t.footer.bottom.changeLang}
              </div>
              <div
                onClick={scrollToTop}
                className={styles["footer-bottom-item__container"]}
              >
                <Image src={TopButton} alt="" />
                {t.footer.bottom.returnToMain}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
