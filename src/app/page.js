"use client";

import Image from "next/image";
import patternMobile from "../../public/images/pattern-divider-mobile.svg";
import patternDesktop from "../../public/images/pattern-divider-desktop.svg"
import { useEffect, useState } from "react";
import dice from "../../public/images/icon-dice.svg";

export default function Home() {
  const [jsonData, setJsonData] = useState({});

  const fetchData = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setJsonData(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };


 

  const adviceId = jsonData?.slip?.id;
  const advice = jsonData?.slip?.advice;

  return (
    <main className="">
      <h1>Advice #{adviceId}</h1>
      <p className="">{`"${advice}"`}</p>
      <Image className="mb-10 mt-5 md:hidden" src={patternMobile} alt="separator" quality={100} />
      <Image className="mb-10 mt-5 hidden md:block" src={patternDesktop} alt="separator" quality={100} />
      <div className="relative w-full ">
        <button onClick={ handleClick }>
          <Image src={dice} width={30} height={30} alt="dice-icon" />
        </button>
      </div>
      
    </ main>
  );
}
