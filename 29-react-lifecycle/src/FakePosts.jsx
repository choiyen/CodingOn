import React, { useState } from "react";
import FakePostsChild from "./FakePostsChild";

export default function FakePosts() {
  let [posts, setposts] = useState([]);

  return (
    <div>
      <FakePostsChild posts={posts} setposts={setposts}></FakePostsChild>
    </div>
  );
}
