import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function MovingStars () {
  const starsRef = useRef()

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0005
    }
  })

  return (
    <Stars ref={starsRef} radius={85} depth={50} count={2000} factor={8} saturation={0} fade
    />
  )
}