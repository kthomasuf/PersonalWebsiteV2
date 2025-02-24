import React, { useState, useRef } from 'react';
import peaks3 from '../assets/peaks3.svg'
import underground from '../assets/underground.svg'
import KennyThomas from '../assets/KennyThomas.jpg'

export default function About () {
  
  return (
    <div className="w-full h-auto">
      <img src={peaks3} className="block w-full object-cover pointer-events-none"></img>
      <div className="relative flex flex-row w-full h-[1200px] mt-[-10px] mb-[-10px] px-20 py-20 bg-green3 font-poppins">
        <div className="absolute flex flex-col top-[400px] left-[10px] text-[150px] text-sp-white opacity-[0.035] font-extrabold pointer-events-none">
          <span>Kenny</span>
          <span className="mt-[-100px]">Thomas</span>
        </div>
        <div className="flex w-full justify-center">
          <div>
            <div className="text-4xl text-sp-white font-bold">About</div>
            <div className="relative flex justify-center items-center mt-8">
              <img src={KennyThomas} className="w-[300px] h-[360px] object-cover rounded-lg z-[1]"></img>
              {/* <div className="absolute top-[25px] left-[25px] w-[300px] h-[360px] bg-green2 z-0"></div> */}
            </div>
          </div>
        </div>
        <div className="flex w-full mt-20">
          <div className="flex flex-col text-xl text-sp-white opacity-90">
            <span className="">Hello!</span>
            <span className="mt-0.5">I'm Kenny.</span>
            <span className="mt-6">I am currently an undergraduate senior at the University of Florida majoring in Computer Science and minoring in Geography.</span>
            <span className="mt-6">In the near future I will be pursuing my master's in Computer Science where I hope to hone my skills in full stack and AI/ML development.</span>
            <span className="mt-6">When I'm not consumed by my studies; I enjoy building side projects, playing indie games, and listening to music. :)</span>
          </div>
        </div>
      </div>
      {/* <img src={underground} className="block w-full object-cover pointer-events-none z-10"></img> */}
    </div>
  )
}