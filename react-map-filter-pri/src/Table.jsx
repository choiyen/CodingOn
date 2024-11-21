import React, { useState } from "react";

export default function Table() {
  const [name, setname] = useState("");
  const [conment, setconment] = useState("");
  const [speah, setspeah] = useState("");

  const [fulllist, setfulllist] = useState([]);
  const [selectlist, setselectlist] = useState([]);
  const [option, setoption] = useState("작성자");

  let importfulllist = () => {
    if (name.trim().length === 0 && conment.trim().length === 0) {
      return;
    }
    const newfulllist = {
      id: fulllist.length + 1,
      name: name,
      conment: conment,
    };

    // const newfulllist = fulllist.concat({
    //   id: fulllist.length + 1,
    //   name: name,
    //   conment: conment,
    // });

    setfulllist([...fulllist, newfulllist]);
    console.log(fulllist);
    // input 초기화
    setconment("");
    setname("");
  };
  let importselectlist = () => {
    let newselectlist;
    if (speah.trim().length === 0) {
      return;
    }
    if (option === "작성자") {
      newselectlist = fulllist.filter((value) => {
        return value.name.includes(speah);
      });
    } else {
      newselectlist = fulllist.filter((value) => {
        return value.conment.includes(speah);
      });
    }
    console.log(newselectlist);
    setselectlist(newselectlist);
    // input 초기화
    setspeah("");
  };

  const deletefulllist = (targetId) => {
    const newfulllist = fulllist.filter((value) => value.id !== targetId);
    setfulllist(newfulllist);
  };

  return (
    <div>
      <fieldset>
        작성자 :
        <input
          type="text"
          placeholder="작성자"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        내용 :
        <input
          type="email"
          placeholder="코멘트"
          value={conment}
          onChange={(e) => {
            setconment(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              // 엔터키가 눌렸을 때
              importfulllist();
            }
          }}
        />
        <button onClick={importfulllist}>입력</button>
      </fieldset>

      <fieldset>
        <select
          name="user"
          id="select"
          onChange={(e) => setoption(e.target.value)}
        >
          <option value="작성자" selected>
            작성자
          </option>
          <option value="제목">제목</option>
        </select>
        검색어 :
        <input
          type="text"
          placeholder="검색어"
          value={speah}
          onChange={(e) => {
            setspeah(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              // 엔터키가 눌렸을 때
              importselectlist();
            }
          }}
        />
        <button onClick={importselectlist}>검색</button>
      </fieldset>

      <div>
        <br />
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
          </thead>
          <tbody>
            {fulllist.map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.conment}</td>
                  <td>{value.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
        <br />
        <br />

        {selectlist.length == 0 ? (
          <span>해당하는 검색 결과가 없습니다.</span>
        ) : (
          <table>
            <thead>
              <tr>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
              </tr>
            </thead>
            <tbody>
              {selectlist.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.conment}</td>
                    <td>{value.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
