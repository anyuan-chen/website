import React from "react";
import Navbar from "../../components/navbar/navbar";
import ArticlePreview from "../../components/writing/articlePreview";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Writing({ posts }) {
  return (
    <div className="grid grid-cols-6 grid-rows-6 w-screen h-screen">
      <div className="row-start-1 row-span-6 col-span-1">
        <Navbar></Navbar>
      </div>
      <div
        className="row-start-1 row-span-6 col-span-5 h-screen overflow-auto"
        style={{
          backgroundColor: "#021923",
          paddingLeft: "50px",
          paddingTop: "50px",
          paddingRight: "50px",
        }}
      >
        <h2 className="pb-16" style={{letterSpacing: "0.25rem"}}>Articles</h2>
        {posts.map((post, index) => {
          return (
            <ArticlePreview
              key={index}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              date={post.frontmatter.date}
            ></ArticlePreview>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("public", "/posts"));
  const posts = files.map((filename) => {
    const markdownMeta = fs.readFileSync(path.join("public", "posts", filename));
    const { data: frontmatter } = matter(markdownMeta);
    return {
      frontmatter,
      slug: filename.split("."[0]),
    };
  });
  return {
    props: {
      posts,
    },
  };
};
