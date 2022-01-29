/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import navbarElement from "./navbarElement";
import NavbarElement from "./navbarElement";

export default function Navbar() {
  return (
    <ul className="grid grid-rows-6 h-full ">
      <div className="flex justify-center row-span-2 flex-start w-full">
        <a href="/" className="w-3/4" style={{paddingTop: "50px"}}>
          <img
            src="/icons/logo_placeholder.svg"
            alt="logo for Andrew Chen"
          />
        </a>
      </div>
      <div className="row-start-3 flex justify-center space-y-8 w-full">
        <div className="w-3/4">
          {/* <Link href="/">
              <a className="no-underline text-black">
                <li className="border-gray py-10 border-t border-b">
                  <h4>Home</h4>
                </li>
              </a>
            </Link>
          */}
          <NavbarElement link="/" text="home"></NavbarElement>
          <NavbarElement link="/work" text="work"></NavbarElement>
          <NavbarElement link="/writing" text="writing"></NavbarElement>
          <NavbarElement link="/about" text="about"></NavbarElement>
          <NavbarElement link="/contact" text="contact"></NavbarElement>
        </div>
      </div>
    </ul>
  );
}
