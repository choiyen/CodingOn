import React, { useState } from "react";

export default function Alphabet() {
  /*
  const list = ["a", "b", "c", "d", "e"];
  const items = list.map((txt, index, arr) => {
    console.log("txt : ", txt);
    console.log("index :", index);
    console.log("arr :", arr);
    return txt + index;
  });
  console.log("items :", items);
  */

  // const [alphabet, setAlphabet] = useState(["b", "a", "n", "a", "n", "a"]);
  const [alphabet, setAlphabet] = useState([
    // {
    //   id: 1,
    //   alpha: "b",
    // },
    // {
    //   id: 2,
    //   alpha: "a",
    // },
    // {
    //   id: 3,
    //   alpha: "n",
    // },
    // {
    //   id: 4,
    //   alpha: "a",
    // },
    // {
    //   id: 5,
    //   alpha: "n",
    // },
    // {
    //   id: 6,
    //   alpha: "a",
    // },
  ]);
  const [input, setInput] = useState("");

  const addAlpha = () => {
    // [퀴즈] input이 빈값이라면 alpabet 상태 변경 X
    if (input.trim().length === 0) {
      return;
    }

    // alphabet 추가
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: input,
    });
    setAlphabet(newAlpha);
    // input 초기화
    setInput("");
  };

  const deleteAlpha = (targetId) => {
    const newAlpha = alphabet.filter((value) => value.id !== targetId);
    setAlphabet(newAlpha);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {/* {list.map((txt) => {
          return <li>{txt}</li>;
        })} */}

        {alphabet.map((value, idx) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
        {/* 단축평가 */}
        {alphabet.length === 0 && <span>알파벳을 입력해주세요!</span>}
        {undefined || <span>정의된 값이 없어요!</span>}
      </ol>
    </div>
  );
}
