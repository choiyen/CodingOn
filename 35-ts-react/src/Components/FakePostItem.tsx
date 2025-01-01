import React from "react";
import { FakePostsTypes } from "../commonTypes";
interface Props {
  key: number;
  post: FakePostsTypes;
}

export default function FakePostItem({ key, post }: Props) {
  return (
    <div className="PostItem">
      <div
        style={{
          backgroundColor: "#D2F7FF",
          marginBottom: "20px",
          textAlign: "left",
          width: "500px",
          border: "1px solid black",
          borderRadius: "20px",
          lineHeight: "20px",
          marginLeft: "10px",
        }}
      >
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          <span style={{ color: "blue" }}> No. {post.id}</span>
          <span style={{ fontWeight: "600" }}>- {post.title}</span>
        </div>
        <p className="body" style={{ marginLeft: "10px" }}>
          {post.body.slice(0, 120)}...
        </p>
      </div>
    </div>
  );
}
