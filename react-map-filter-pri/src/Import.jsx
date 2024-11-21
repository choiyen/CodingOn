import React, { useState } from "react";

export default function Import() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [profile, setprofile] = useState([]);

  let importplace = () => {
    if (name.trim().length === 0 || email.trim().length === 0) {
      return;
    }
    const newprofile = profile.concat({ id: profile.length + 1, name, email });
    setprofile(newprofile);
    // input 초기화
    setname("");
    setemail("");
  };
  const deleteprofile = (targetId) => {
    const newprofile = profile.filter((value) => value.id !== targetId);
    setprofile(newprofile);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => {
          setemail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode == 13) {
            // 엔터키가 눌렸을 때
            importplace();
          }
        }}
      />
      <button onClick={importplace}>입력</button>

      <div>
        <ol>
          {profile.map((value) => {
            return (
              <li key={value.id} onDoubleClick={() => deleteprofile(value.id)}>
                이름 : {value.name} 이메일: {value.email}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
