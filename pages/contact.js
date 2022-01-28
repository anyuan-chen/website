import React from "react";
import LinkContainer from "../components/contact/linkContainer";
import ResumeContainer from "../components/contact/resumeContainer";
import Navbar from "../components/navbar/navbar";

export default function Contact() {
  return (
    <div className="h-screen w-screen grid grid-rows-6 grid-cols-6">
      <nav className="col-start-1 col-span-1 row-start-1 row-span-6">
        <Navbar></Navbar>
      </nav>
      <main
        className="col-start-2 row-start-1 row-span-6 col-span-5 grid grid-rows-6 grid-cols-5 "
        style={{ backgroundColor: "#162932" }}
      >
        <section
          className=" col-span-5 col-start-1 row-start-1 row-span-4"
          style={{ backgroundColor: "#021923" }}
        >
          <LinkContainer></LinkContainer>
        </section>
        <section
          className="col-span-5 col-start-1 row-start-5 row-span-2"
          style={{ backgroundColor: "#021923" }}
        >
          <ResumeContainer></ResumeContainer>
        </section>
      </main>
    </div>
  );
}
