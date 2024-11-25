import React, { useState } from "react";
import FakePostsChild from "./FakePostsChild";
import FakePostsSet from "./FakePostsSet";

export default function FakePosts() {
  let [posts, setposts] = useState([]);

  return (
    <div>
      <FakePostsChild setposts={setposts}></FakePostsChild>
      <FakePostsSet posts={posts}></FakePostsSet>
    </div>
  );
}
