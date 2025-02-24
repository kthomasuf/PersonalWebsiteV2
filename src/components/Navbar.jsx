import React, { useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import Banner2 from "../assets/Banner2.png"

export default function Navbar () {
  const [paused, setPaused] = useState(false);

  const topBanner = useSpring({
    from: {transform: "translateY(-100%)"},
    to: {transform: "translateY(25%)"},
    config: {
      duration: 3000,
      easing: (t) => 1 - Math.pow(1 - t, 3)
    },
    onRest: () => setPaused(true),
    pause: paused,
  });

  return (
    <div className="flex justify-between items-center fixed w-full h-16 top-0 z-10 px-8 font-poppins text-lg">
      <div className="text-2xl text-sp-white text-bold">KT</div>
      <div>
        <button className="mr-4 text-sp-white">about</button>
        <button className="mr-4 text-sp-white">skills</button>
        <button className="text-sp-white">projects</button>
      </div>
    </div>
  )
}
