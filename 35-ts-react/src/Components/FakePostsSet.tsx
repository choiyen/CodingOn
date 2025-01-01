import React, { useEffect, useRef } from "react";
import { FakePostsTypes } from "../commonTypes";
import FakePostItem from "./FakePostItem";
interface Props {
  posts: FakePostsTypes[];
}

export default function FakePostsSet({ posts }: Props) {
  useEffect(() => {
    console.log("업데이트 완료");
  }, [posts]);
  const inputRef = useRef(null);

  return (
    <div>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            return (
              // <div key={value.id}>
              //   <div
              //     ref={inputRef}
              //     style={{
              //       backgroundColor: "#D2F7FF",
              //       marginBottom: "20px",
              //       textAlign: "left",
              //       width: "500px",
              //       border: "1px solid black",
              //       borderRadius: "20px",
              //       lineHeight: "20px",
              //     }}
              //     className="wrap"
              //   >
              //     <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
              //       <span style={{ color: "blue" }}> No. {value.id}</span>
              //       <span style={{ fontWeight: "600" }}>- {value.title}</span>
              //     </div>
              //     <div style={{ marginLeft: "10px" }}>{value.body}</div>
              //   </div>
              // </div>

              <FakePostItem key={post.id} post={post} />
            );
          })}
        </div>
      ) : (
        <div> loading... </div>
      )}
    </div>
  );
}
