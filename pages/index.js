import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import Header from "../components/header/header";
import HeroSection from "../components/heroSection/heroSection";
import Info from "../components/info/info";
import Map from "../components/map/map";
import NavModal from "../components/navModal/navModal";
import Service from "../components/service/service";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Accept</title>
        <meta
          name="description"
          content="საგადასახადო კონსულტაცია, აუდიტი, ბუღალტერია, ქონების შეფასება"
        ></meta>
      </Head>
      <div
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <div className="backgroundImage">
          <Header setIsOpen={setIsOpen} />
          <NavModal setIsOpen={setIsOpen} isOpen={isOpen} />
          <HeroSection />
        </div>
        <Info />
        <Service />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
