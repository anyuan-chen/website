import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
export default function ExternalLink({ label, text, state, link }) {
  const [active, setActive] = useState(false);

  const props = useSpring({
    textDecorationColor: active
      ? state
        ? "gray"
        : "white"
      : "rgba(255, 255, 255, 0)",

    color: active ? "white" : state ? "gray" : "white",
    config: config.gentle,
  });
  return (
    <a
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      style={{ textDecoration: "none" }}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <h2 style={{ fontSize: "4.5rem", letterSpacing: "0.02rem" }}>{label}</h2>
      <div className="flex">
        <animated.h1
          style={{
            marginTop: "-30px",
            letterSpacing: "0.02rem",
            textDecoration: "underline",
            textUnderlineOffset: "10px",
            ...props,
          }}
        >
          {text}
        </animated.h1>
        <img src="/icons/arrow_downward.svg"></img>
      </div>
    </a>
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
