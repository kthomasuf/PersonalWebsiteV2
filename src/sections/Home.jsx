import React, { useState, useRef } from 'react';
import { useSpring, animated } from "@react-spring/web";
import Banner from "../assets/Banner.png"
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from '@react-three/drei';
import MovingStars from '../components/MovingStars.jsx'
import KennyThomas from '../assets/KennyThomas.jpg'
import arrow from '../assets/arrow.png'
import { motion, animate } from 'framer-motion'

export default function Home () {

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-row w-full h-auto mt-[250px] pb-24 px-20">
        <div className="flex flex-col justify-center items-center w-full">
          <div>
            <div className="flex flex-col font-poppins">
              <span className="text-3xl text-sp-white">Hello I'm</span>
              <div className='flex flex-row'>
                <span className="text-sp-white text-7xl font-medium mt-1">Kenny Thomas</span>
              </div>
            </div>
            <div className="font-source text-sp-white text-lg mt-4">
              CS Senior @ the University of Florida
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">

        </div>
      </div>
      <motion.div 
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }} 
        className="flex flex-col justify-center items-center opacity-90">
        <span className="text-sp-white">Scroll Down</span>
        <img src={arrow} className="w-[20px] h-[20px] object-contain invert pointer-events-none"></img>        
      </motion.div>
      <div className="absolute inset-0 z-[-1]">
        <Canvas>
          <MovingStars></MovingStars>
        </Canvas>
      </div>
    </div>
  )
}
