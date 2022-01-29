import React from "react";
import Navbar from "../../components/navbar/navbar";
import ProjectPreview from "../../components/projects/projectPreview";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Work({ projects }) {
  return (
    <div className="grid grid-cols-6 grid-rows-6 w-screen h-screen">
      <div className="row-start-1 row-span-6 col-span-1">
        <Navbar></Navbar>
      </div>
      <div
        className="row-start-1 row-span-4 col-span-5"
        style={{
          backgroundColor: "#021923",
          paddingLeft: "50px",
          paddingTop: "50px",
          paddingRight: "50px",
        }}
      >
        <h2>Projects</h2>
        {projects.map((project, index) => {
          return (
            <ProjectPreview
              name={project.frontmatter.title}
              date={project.frontmatter.date}
              key={index}
            ></ProjectPreview>
          );
        })}
      </div>
      <div
        className="row-start-5 row-span-2 col-span-5"
        style={{
          backgroundColor: "#021923",
          paddingLeft: "50px",
          paddingTop: "50px",
          paddingRight: "50px",
        }}
      >
        <h2>Projects</h2>
        {projects.map((project, index) => {
          return (
            <ProjectPreview
              name={project.frontmatter.title}
              date={project.frontmatter.date}
              key={index}
            ></ProjectPreview>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const files = fs.readdirSync(path.join("public", "projects"));
  const projects = files.map((filename) => {
    const markdownMeta = fs.readFileSync(
      path.join("public", "projects", filename)
    );
    const { data: frontmatter } = matter(markdownMeta);
    return {
      frontmatter,
      slug: filename.split("."[0]),
    };
  });
  return {
    props: {
      projects,
    },
  };
};
