import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/header/header";
import HeroSection from "../components/heroSection/heroSection";
import Map from "../components/map/map";
import NavModal from "../components/navModal/navModal";
import backGroundImage from "../public/images/BackgroundImage.png";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <div
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          }
        }}
        className="asdf"
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          backgroundImage: `url(${backGroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <Header setIsOpen={setIsOpen} />
        <HeroSection />
        <NavModal setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
}
