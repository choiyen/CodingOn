const { param } = require("../routes");

// 폼의 등록 버튼 클릭 시 테이블에 데이터 추가
async function createVisitor() {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름 또는 방명록을 기입해주세요!");
    return;
  }

  // name 10글자 유효성 검사
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만입니다!");
    return;
  }

  const { data } = await axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  });
  const { id, name, comment } = data;
  const html = `
        <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td><button onclick="editVisitor()">수정</button></td>
          <td><button onclick="deleteVisitor()">삭제</button></td>
        </tr>
        `;
  // : 특정 요소의 html을 추가시키는 녀석.
  const tbody = document.querySelector("tbody");
  tbody.insertAdjacentHTML("beforeend", html);
  form.reset();
}

//수정 버튼 클릭 시
// - form input에 값 넣기
// 변경, 취소 버튼 보이기
async function editVisitor(id) {
  // 1. form input에 값을 넣기 (DB에서 받아서)
  const { data } = await axios({
    method: "get",
    //1) req.query(서버 -> /visitor)
    //url: `/visitor?id=${id}`,
    //2) req.params (서버 -> visitor/:id)
    // url: "/visitor",
    // params: {
    //   id: id,
    // },

    //2) req.params (서버 -> /visitor/:id)
    url: `/visitor/${id}`,
  });
  console.log("editVisitor", data);
  const { name, comment } = data;
  const form = document.forms["visitor-form"];
  form.name.value = name;
  form.comment.value = comment;

  const html = `
     <button type= "button" onclick="editDo(${id})">변경</button>
     <button type= "button" onclick="editCancle(${id})">취소</button>`;

  const btnGroup = document.querySelector("#button-group");
  btnGroup.innerHTML = html;
}

async function editDo(id) {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름 또는 방명록을 기입해주세요!");
    return;
  }

  // name 10글자 유효성 검사
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만입니다!");
    return;
  }

  const { data } = await axios({
    method: "PATCH",
    url: "/visitor",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  });

  const chidren = document.querySelector(`#tr_${id}`).children;
  chidren[1].textContent = form.name.value;
  chidren[2].textContent = form.comment.value;

  //입력창 초기화, 등록 버튼 다시 보이게.
  editCancle();
}

//취소 버튼 클릭시
// input은 초기화
// 등록 버튼 보이기
function editCancle() {
  const form = document.forms["visitor-form"];
  form.reset();

  const html = `<button type="button" onclick="createVisitor()">등록</button>`;
  const btnGroup = document.querySelector("#button-group");
  btnGroup.innerHTML = html;
}

//삭제 버튼 클릭 시
// - DB에 삭제
// - table에서도 해당하는 행 삭제.

async function deleteVisitor(obj, id) {
  if (!confirm("정말 삭제하시겠습니까?")) return;

  axios({
    method: "DELETE",
    url: "/visitor",
    data: { id: id },
  });

  obj.parentElement.parentElement.remove();
}
