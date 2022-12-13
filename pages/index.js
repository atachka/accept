import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/header/header";
import Map from "../components/map/map";
import NavModal from "../components/navModal/navModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        filter: "brightness(70%)",
      }}
    >
      <Header setIsOpen={setIsOpen} />
      <NavModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
