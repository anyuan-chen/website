import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ExternalLink from "./link";

export default function LinkContainer() {
  const [active, setActive] = useState(false);
  return (
    <animated.section
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <ExternalLink
        text="andrew.chen.anyuan@gmail.com"
        label="Email"
        state={active}
      ></ExternalLink>
      <ExternalLink
        text="andrew.chen.anyuan@gmail.com"
        label="Email"
        state={active}

      ></ExternalLink>
      <ExternalLink
        text="andrew.chen.anyuan@gmail.com"
        label="Email"
        state={active}

      ></ExternalLink>
    </animated.section>
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
