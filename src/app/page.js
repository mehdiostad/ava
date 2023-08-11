'use client'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import Footer from './components/Footer';
import Thoughts from './components/Thoughts';
import AboutUs from './components/AboutUs';

export default function Home() {
  
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <Thoughts />
      <AboutUs />
      <Footer />
    </>
  );
}
