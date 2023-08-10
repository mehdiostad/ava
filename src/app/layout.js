"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import "./globals.css";
import { Transition } from "@headlessui/react";
import { CiMenuFries } from "react-icons/ci";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Thoughts from "../../public/toughts.jpg";
import Image from "next/image";
import Menu from "./components/Menu";

export default function RootLayout({ children }) {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };

  return (
    <html>
      <body>
        <div>
          <Menu menu={menu} toggleMenu={toggleMenu} />
          {!menu && (
            <div>
              <Header toggleMenu={toggleMenu} />
              {children}
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
