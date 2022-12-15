import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/header/header";
import HeroSection from "../components/heroSection/heroSection";
import Info from "../components/info/info";
import Map from "../components/map/map";
import NavModal from "../components/navModal/navModal";
import backGroundImage from "../public/images/BackgroundImage.png";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
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
        <Info />
      </div>
    </div>
  );
}
