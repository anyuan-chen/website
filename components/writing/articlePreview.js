/* eslint-disable @next/next/no-img-element */
import React from "react";
import { animated, useSpring } from "react-spring";

export default function ArticlePreview({ title, description, date }) {
  const [active, setActive] = React.useState(false);
  const props = useSpring({
    opacity: active ? 0.8 : 1,
    display: active ? "inline-block" : "none",
    transform: active ? "translateX(20px)" : "translateX(0px)",
  });
  const scaleProp = useSpring({
    transform: active ? "scale(1.003)" : "scale(1)",
    opacity: active ? 1 : 0,
  });

  return (
    <a
      href={`/writing/${title}`}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <animated.div className=" w-full px-24 py-20 border flex flex-col  border-gray-500">
        <animated.div  className="flex flex-col space-y-8">
          <animated.h1
            style={{ marginBottom: "-10px", opacity: props.opacity }}
          >
            {title}
          </animated.h1>
          <h5 style={{ opacity: 0.6, fontSize: "2.9rem" }}>{description}</h5>
          <div className="flex justify-between">
            <div className="flex">
              <a style={{ fontSize: "3rem" }}>Read More</a>
              <animated.div
                style={{
                  opacity: scaleProp.opacity,
                  transform: props.transform,
                  marginLeft: "-15px",
                }}
              >
                <img
                  height="18px"
                  src="/icons/side_arrow.svg"
                  alt="arrow"
                ></img>
              </animated.div>
            </div>
            <p style={{ fontSize: "3rem" }}>{date}</p>
          </div>
        </animated.div>
      </animated.div>
    </a>
  );
}
