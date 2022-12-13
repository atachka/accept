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
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: isOpen ? "rgba(128,128,128,0.75)" : false,
      }}
    >
      <Header setIsOpen={setIsOpen} />
      <NavModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
