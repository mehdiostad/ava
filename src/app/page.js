'use client'
import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Home() {
  
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <h1>main page</h1>

      <>
        <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
          Toggle
        </button>
        <Transition
          show={isShowing}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          I will fade in and out
        </Transition>
      </>
    </>
  );
}
