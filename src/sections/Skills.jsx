import React, { useState, useRef } from 'react';
import peaks3 from '../assets/peaks3.svg'
import underground from '../assets/underground.svg'
import KennyThomas from '../assets/KennyThomas.jpg'
import waves from '../assets/waves.svg'
import floor from '../assets/floor.svg'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import java from '../assets/java.png'
import cplusplus from '../assets/cplusplus.png'
import postgresql from '../assets/postgresql.png'
import arcgis from '../assets/arcgis.png'

export default function Skills () {
  
  return (
    <div className="w-full h-auto">
      <img src={waves} className="block w-full object-cover pointer-events-none"></img>
      <div className="relative flex flex-col w-full h-full mt-[-10px] mb-[-10px] px-20 bg-ocean bg-cover font-poppins">
        <div className="absolute flex flex-col top-[160px] right-[-140px] text-[150px] text-sp-white opacity-[0.035] font-extrabold pointer-events-none -rotate-90">
          <span>Skills</span>
        </div>
        <div className="flex flex-col w-full h-[600px]">
          <div className="flex w-1/2 justify-center">
            <span className="w-[300px] text-4xl text-sp-white font-bold">Skills</span>
          </div>
          <div className="w-full grid grid-cols-4 gap-8 auto-rows-auto px-48 mt-8">
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={react} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">React</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={tailwind} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">Tailwind CSS</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={javascript} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">JavaScript</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={python} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">Python</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={java} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">Java</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={cplusplus} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">C++</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={postgresql} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">PostgreSQL</span>
              </div>
            </div>
            <div className="justify-center items-center text-2xl text-sp-white font-medium min-w-[175px] max-w-[200px] min-h-[200px] max-h-[250px]">
              <div className="flex flex-col items-center">
                <img src={arcgis} className="w-[150px] h-[150px] max-w-[150px] max-h-[150px] object-contain pointer-events-none"></img>
                <span className="opacity-90 mt-4">ArcGIS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={floor} className="block w-full object-cover pointer-events-none"></img>
    </div>
  )
}