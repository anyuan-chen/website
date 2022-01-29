/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ProjectPreview({ name, date }) {
  const year = date.substring(date.length-4);
  return (
    <a className="flex no-underline" href={`/projects/${name}`}>
      <h1>{name}</h1>
      <img src="/icons/arrow_downward_white.svg" alt="arrow"></img>
      <h1 style={{marginLeft: "auto"}}>{year}</h1>
    </a>
  );
}
