import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ExternalLink from "./link";

export default function ResumeContainer() {
  const [active, setActive] = useState(false);
  return (
    <section
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      style={{ marginTop: "10px" }}
    >
      <h2
        style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "6rem",
          fontWeight: "500",
          letterSpacing: "0.2rem",
        }}
      >
        Resume
      </h2>
      <div className="flex">
        <ExternalLink
          text=".pdf"
          state={active}
          link="mailto:andrew.chen.anyuan@gmail.com"
        ></ExternalLink>
        <ExternalLink
          text=".docx"
          state={active}
          link="mailto:andrew.chen.anyuan@gmail.com"
        ></ExternalLink>
        <ExternalLink
          text=".tex"
          state={active}
          link="mailto:andrew.chen.anyuan@gmail.com"
        ></ExternalLink>
      </div>
    </section>
  );
}
// export default function ProjectsHeading() {
//     const [active, setActive] = useState(false);

//     const props = useSpring({
//       transform: active
//         ? "translate(30px,30px)"
//         : "translate(0px,0px)",
//     });

//     return (
//       <button
//         onMouseEnter={() => {
//           setActive(true);
//         }}
//         onMouseLeave={() => {
//           setActive(false);
//         }}
//         className="flex"
//       >
//         <a href="https://www.google.com" className="flex items-end">
//           <h1 className="underline">Project 1</h1>
//           <animated.div style={{...props}}>
//             <img src="/icons/arrow_downward_white.svg"></img>
//           </animated.div>
//         </a>
//       </button>
//     );
//   }
