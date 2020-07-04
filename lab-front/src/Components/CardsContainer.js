import React from "react";
import TumblrCard from "./tmblrCard";

const CardsContainer = (props) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
      margin: "20px",
    }}
  >
    {props.posts.map((post) => (
      <TumblrCard
        key={post._id}
        username={post.creatorId.username}
        avatar={post.creatorId.avatar}
        content={post.content}
        picPath={post.picPath}
        notes={post.notes || Math.floor(Math.random() * 1000)}
      />
    ))}
  </div>
);
export default CardsContainer;
