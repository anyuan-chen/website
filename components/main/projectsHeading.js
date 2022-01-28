/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Spring, animated, useSpring, Controller } from "react-spring";
import { useState } from "react";

export default function ProjectsHeading() {
  const [active, setActive] = useState(false);

  const props = useSpring({
    transform: active
      ? "translate(30px,30px)"
      : "translate(0px,0px)",
  });

  return (
    <button
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      className="flex"
    >
      <a href="https://www.google.com" className="flex items-end">
        <h1 className="underline">Project 1</h1>
        <animated.div style={{...props}}>
          <img src="/icons/arrow_downward_white.svg"></img>
        </animated.div>
      </a>
    </button>
  );
}

//   const [{ x, y }, set] = useSpring(() => ({ x: 50, y: -50 }));
//   return (
//     <div
//       onMouseEnter={() => set({ x: 50, y: -50 })}
//       onMouseLeave={() => set({ x: 0, y: 0 })}
//     >
//       <animated.div
//         style={{
//           transform: y.interpolate(
//             (v) => `translateY(${v}px))`
//           ),
//         }}
//       >
//         <a href="https://www.google.com" className="flex">
//           <h1 className="underline">Project 1</h1>
//           <img src="/icons/arrow_downward_white.svg"></img>
//         </a>
//       </animated.div>
//     </div>
//   );

// const [{ backgroundColor }, set] = useSpring(() => ({ backgroundColor: "white" }));
//   return (
//     <div
//       onMouseEnter={() => set({ backgroundColor: "#D8D8D8" })}
//       onMouseLeave={() => set({ backgroundColor: "white" })}
//     >
//       <animated.div style={{ backgroundColor }}>
//         <Link href={link}>
//           <a className="no-underline text-black">
//             <li className="border-gray py-10 border-t border-b">
//               <h4>{text}</h4>
//             </li>
//           </a>
//         </Link>
//       </animated.div>
//     </div>
//   );
