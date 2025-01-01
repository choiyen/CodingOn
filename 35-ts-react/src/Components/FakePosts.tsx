import React, { useState } from "react";
import FakePostsChild from "./FakePostsChild";
import FakePostsSet from "./FakePostsSet";
import { FakePostsTypes } from "../commonTypes";

export default function FakePosts() {
  let [posts, setposts] = useState<FakePostsTypes[]>([]);

  return (
    <div>
      <FakePostsChild setposts={setposts}></FakePostsChild>
      <FakePostsSet posts={posts}></FakePostsSet>
    </div>
  );
}
