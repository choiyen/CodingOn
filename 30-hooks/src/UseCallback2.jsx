import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
export default function UseCallback2({ postId }) {
  const [post, setPost] = useState();
  //[before]
  const getPost = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(res.data);
    setPost(res.data);
  };
  //[after]
  const getPost1 = useCallback(async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(res.data);
    setPost(res.data);
  }, [postId]);
  useEffect(() => {
    getPost1();
  }, [getPost1]);

  return (
    <>
      <h1>UseCallback2</h1>
      {post && (post.id ? post.body : "없음")}
    </>
  );
}
