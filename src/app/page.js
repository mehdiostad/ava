'use client'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import Footer from './components/Footer';

export default function Home() {
  
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <Footer />
    </>
  );
}
