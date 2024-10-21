const { param } = require("../routes");

async function duplication() {
  const form = document.forms["update-form"];
  const { data } = await axios({
    method: "POST",
    url: "/duplication",
    data: {
      id: form.id.value,
    },
  });

  console.log(data.isSuccess);

  if (data.isSuccess === true) {
    return true;
  } else {
    return false;
  }
}

function register() {
  const form = document.forms["update-form"];
  console.log(form);

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
}
async function createlogin() {
  // 회원가입 페이지 완료
  const form = document.forms["update-form"];
  console.log(form);

  if (
    form.name.value.length === 0 ||
    form.id.value.length === 0 ||
    form.pw.value.length === 0
  ) {
    alert("아직 입력되지 않은 값이 존재합니다.");
    return;
  }
  // name 10글자 유효성 검사
  if (form.name.value.length > 20) {
    alert("이름은 20글자 미만니다!");
    return;
  }

  const dup = await duplication();

  if (dup == true) {
    alert("아이디가 중복 되었습니다.");
    return;
  } else {
    const { data } = await axios({
      method: "post",
      url: "/login",
      data: {
        name: form.name.value,
        id: form.id.value,
        pw: form.pw.value,
      },
    });
    window.location.href = "/";
    console.log(data);
  }
}
async function login() {
  const form = document.forms["login-form"];
  //console.log(form);
  const result = document.querySelector("div");

  //console.log(result);
  if (form.id.value.length === 0) {
    result.textContent = "아이디를 입력하지 않으셨습니다.";
    result.className = "error";
    return;
  }
  if (form.pw.value.length === 0) {
    result.textContent = "비밀번호를 입력하지 않으셨습니다.";
    result.className = "error";
    return;
  }

  const { data } = await axios({
    method: "POST",
    url: "/loginsuess",
    data: {
      id: form.id.value,
    },
  });

  if (data.isSuccess == true) {
    if (form.pw.value == data.userInfo[0].pw) {
      const { userid, name } = data.userInfo[0];
      //location.href = `/profile/?id=${userid}&name=${name}`;
      let count = document.querySelector("form");
      let objs = document.createElement("input");
      objs.setAttribute("value", name);
      objs.setAttribute("name", "name");
      count.setAttribute("method", "POST");
      count.setAttribute("action", "/profile");
      objs.style.display = "none";
      count.appendChild(objs);
      count.submit();
    } else {
      result.textContent = "아이디 정보는 맞으나, 비밀번호를 틀렸습니다.";
      result.className = "error";
    }
  } else {
    result.textContent = "가입되지 않은 회원입니다.";
    result.className = "error";
    if (confirm("회원정보가 없습니다. 회원 가입을 하시겠습니까?")) {
      location.href = "/login";
    } else {
      return;
    }
  }
}
function updatelogin() {
  const html = `
  <button type= "button" onclick="editDo()">회원정보 수정</button>
  <button type= "button" onclick="editCancle()">수정기능 취소</button>`;

  const btnGroup = document.querySelector("#button-group");
  btnGroup.innerHTML = html;
  document.querySelector("#name").readOnly = false;
}
async function editDo() {
  const form = document.forms["profile-form"];
  const result = document.querySelector("#result");
  if (form.pw.value.length === 0 || form.pw2.value.length === 0) {
    result.textContent = "비밀번호와 비밀번호 확인을 입력해주세요.";
    result.className = "error";
    return;
  }
  if (form.pw.value != form.pw2.value) {
    result.textContent = "비밀번호와 비밀번호 확인이 다릅니다.";
    result.className = "error";
    return;
  }

  const { data } = await axios({
    method: "PATCH",
    url: "/login",
    data: {
      id: form.id.value,
      pw: form.pw.value,
      name: form.name.value,
    },
  });
  location.reload();
}

async function editCancle() {
  const form = document.forms["profile-form"];

  const html = ` <button type="button" onclick="updatelogin()"> 회원정보 수정 </button>`;
  const btnGroup = document.querySelector("#button-group");
  btnGroup.innerHTML = html;
  document.querySelector("#name").readOnly = true;
  document.querySelector("#id").readOnly = true;
  const { data } = await axios({
    method: "POST",
    url: "/Cancle",
    data: { id: form.id.value },
  });
  console.log(data);
  form.name.value = data.userInfo.name;
  form.pw.value = "";
  form.pw2.value = "";
}

async function deletelogin() {
  const form = document.forms["profile-form"];

  if (!confirm("정말 회원정보를 삭제 하시겠습니까?")) {
    return;
  }

  const { data } = await axios({
    method: "DELETE",
    url: "/login",
    data: {
      id: form.id.value,
    },
  });
  location.href = "/";
}

///현재 남은 것.
///회원가입 시 아이디 중복확인
