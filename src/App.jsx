import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import waves from './assets/waves.svg'
import peaks from './assets/peaks.svg'
import peaks3 from './assets/peaks3.svg'
import steps from './assets/steps.svg'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import { useSpring, animated } from "@react-spring/web";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ScrollSnap from "react-scroll-snap";

function App() {
  document.body.classList.add('bg-bg-gray', 'overscroll-none');

  return (
    <div>
      <Navbar></Navbar>
      <Parallax pages={3.4}>
        <ParallaxLayer speed={0} className="bg-bg-gray">
          <Home></Home>
        </ParallaxLayer>
        <ParallaxLayer offset={0.725} speed={0.5} factor={1.5}>
          <About></About>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.75} factor={1} className="z-[2]">
          <Skills></Skills>
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={0} factor={1.2} className="z-[1]">
          <Projects></Projects>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
