import React, { useState, useMemo } from "react";

export default function UseMemoPri() {
  const [text, setText] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const countWord = useMemo(() => {
    let counter = 0;
    if (text.trim() && searchWord.trim()) {
      const words = text.split(" ");
      counter = words.filter((word) => {
        return word.includes(searchWord);
      }).length;
      console.log(counter);
    }

    return counter;
  }, [text, searchWord]);
  return (
    <>
      <div>UseMemoPri</div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="긴 문장을 입력해주세요."
      />
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        placeholder="찾을 단어를 입력해주세요"
      />
      <p>
        "{searchWord}" 단어의 빈도수: {countWord}
      </p>
    </>
  );
}
