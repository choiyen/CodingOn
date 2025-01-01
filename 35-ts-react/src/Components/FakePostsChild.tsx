import React, { useEffect } from "react";
import axios from "axios";
import { FakePostsTypes } from "../commonTypes";
import { Dispatch, SetStateAction } from "react";

interface ComponentProps {
  setposts: Dispatch<SetStateAction<FakePostsTypes[]>>;
}

export default function FakePostsChild({ setposts }: ComponentProps) {
  let postfake = async () => {
    let use = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return use;
  };
  let postfake1 = async () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setposts(res.data);
    });
  };

  useEffect(() => {
    setTimeout(async () => {
      let posts = (await postfake()).data;
      console.log(posts);
      setposts(posts);
      console.log("잠시만 기다려주세요");
    }, 2000);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: "skyblue",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src="./postlist.jpg"
          alt=""
          style={{
            width: "15px",
            height: "15px",
            lineHeight: "15px",
            marginRight: "10px",
          }}
        />
        postlist
      </div>
    </div>
  );
}
