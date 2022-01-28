import React from "react";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

export default function NavbarElement({link, text}) {

  const [{ backgroundColor }, set] = useSpring(() => ({ backgroundColor: "white" }));
  return (
    <div
      onMouseEnter={() => set({ backgroundColor: "#D8D8D8" })}
      onMouseLeave={() => set({ backgroundColor: "white" })}
    >
      <animated.div style={{ backgroundColor }}>
        <Link href={link}>
          <a className="no-underline text-black">
            <li className="border-gray py-10 border-t border-b">
              <h4>{text}</h4>
            </li>
          </a>
        </Link>
      </animated.div>
    </div>
  );
}
