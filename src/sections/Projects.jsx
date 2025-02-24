import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import react from '../assets/react.png'
import rasbpi from '../assets/rasbpi.jpg'

const cycle = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
export default function Projects () {
  const color = useMotionValue(cycle[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 75%, ${color})`

  useEffect(() => {
    animate(color, cycle, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    })
  }, [])
  
  return (
    <motion.div style={{backgroundImage, }} className="w-full h-full place-content-center overflow-hidden bg-bg-black">
      <div className="relative flex flex-col w-full h-full mt-[-10px] mb-[-10px] px-20 pt-72 font-poppins">
        <div className="absolute flex flex-col top-[175px] left-[415px] text-[150px] text-sp-white opacity-[0.035] font-extrabold pointer-events-none">
          <span>Projects</span>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex w-1/2 justify-center">
            <span className="w-[300px] text-4xl text-sp-white font-bold">Projects</span>
          </div>
          <div className="w-full grid grid-cols-2 gap-8 auto-rows-auto place-items-center px-24 mt-8">
            <div className="justify-center items-center text-2xl text-sp-white font-medium w-full max-w-[500px] bg-green-400">
              <div className="flex flex-col items-center">
                <img src={rasbpi} className="w-full max-h-[200px] object-cover pointer-events-none"></img>
                <span className="opacity-90 mt-4">React</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium w-full max-w-[500px] bg-green-400">
              <div className="flex flex-col items-center">
                <img src={react} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}