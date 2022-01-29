import React from "react";
import Navbar from "../components/navbar/navbar";

export default function About() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 w-screen h-screen">
      <div className="row-start-1 row-span-6 col-span-1">
        <Navbar></Navbar>
      </div>
      <div
        className="row-start-1 row-span-6 col-span-5"
        style={{
          backgroundColor: "#021923",
          paddingLeft: "50px",
          paddingTop: "50px",
          paddingRight: "50px"
        }}
      >
       
      </div>
    </div>
  );
}
