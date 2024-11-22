import React, { Component, createRef } from "react";

export default class Table extends Component {
  nameInput = createRef();
  conmentInput = createRef();
  speahInput = createRef();

  state = {
    fulllist: [],
    selectlist: [],
    option: "작성자",
  };

  render() {
    const { fulllist, selectlist, option } = this.state;

    let importfulllist = () => {
      console.log(this.conmentInput.current.value);
      if (this.nameInput.current.value.trim().length === 0) {
        this.nameInput.current.focus();
        return;
      } else {
        if (this.conmentInput.current.value.trim().length === 0) {
          this.conmentInput.current.focus();
          return;
        }
      }

      const newfulllist = {
        id: fulllist.length + 1,
        name: this.nameInput.current.value,
        conment: this.conmentInput.current.value,
      };

      this.setState({ fulllist: newfulllist });

      this.setState((prevState) => {
        fulllist: [...prevState.fulllist, newfulllist];
      });
      console.log(fulllist);
      // input 초기화
    };

    let importselectlist = () => {
      let newselectlist;

      if (this.speahInput.current.value.trim().length === 0) {
        this.speahInput.current.focus();
        return;
      }
      if (option === "작성자") {
        newselectlist = fulllist.filter((value) => {
          return value.name.includes(this.speahInput.current.value);
        });
      } else {
        newselectlist = fulllist.filter((value) => {
          return value.conment.includes(this.speahInput.current.value);
        });
      }
      console.log(newselectlist);
      this.setState({ selectlist: newselectlist });
      // input 초기화
    };

    const deletefulllist = (targetId) => {
      const newfulllist = fulllist.filter((value) => value.id !== targetId);
      this.setState({ fulllist: newfulllist });
    };

    return (
      <div>
        <fieldset>
          작성자 :
          <input type="text" placeholder="작성자" ref={this.nameInput} />
          내용 :
          <input
            type="email"
            placeholder="코멘트"
            onKeyDown={(e) => {
              if (e.keyCode == 13) {
                // 엔터키가 눌렸을 때
                importfulllist();
              }
            }}
            ref={this.conmentInput}
          />
          <button onClick={importfulllist}>입력</button>
        </fieldset>

        <fieldset>
          <select
            name="user"
            id="select"
            onChange={(e) => {
              this.setState({ option: e.target.value });
            }}
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
            ref={this.speahInput}
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
}
