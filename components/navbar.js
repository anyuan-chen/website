import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <ul className="grid grid-rows-6 h-full">
      <div className="flex justify-center items-center row-span-2">
        <div className="w-3/4 flex items-center justify-center">
          <Image
            src="/icons/logo_placeholder.svg"
            height="170px"
            width="170px"
          ></Image>
        </div>
      </div>
      <div className="row-start-3 flex justify-center space-y-8">
        <div className="w-3/4">
          <li className="border-gray py-10 border-t border-b ">
            <h4>Home</h4>
          </li>
          <li className="border-gray py-10 border-t border-b ">
            <h4>Work</h4>
          </li>
          <li className="border-gray py-10 border-t border-b ">
            <h4>Writing</h4>
          </li>
          <li className="border-gray py-10 border-t border-b ">
            <h4>About</h4>
          </li>
          <li className="border-gray py-10 border-t border-b ">
            <h4>Contact</h4>
          </li>
        </div>
      </div>
    </ul>
  );
}
