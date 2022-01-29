import React from "react";
import Navbar from "../../components/navbar/navbar";
import ArticlePreview from "../../components/writing/articlePreview";

export default function Writing() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 w-screen h-screen">
      <div className="row-start-1 row-span-6 col-span-1">
        <Navbar></Navbar>
      </div>
      <div
        className="row-start-1 row-span-6 col-span-5"
        style={{
          backgroundColor: "#021923",
          paddingLeft: "50px",
          paddingTop: "50px",
          paddingRight: "50px"
        }}
      >
        <h2 className="pb-16">Articles</h2>
        <ArticlePreview
          title="Bitsum"
          description="Description goes here. Description goes here. Description goes here. Description goes here.Description goes here. Description."
          date="12/04/23"
        ></ArticlePreview>
      </div>
    </div>
  );
}
