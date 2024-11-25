import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, //form submit 발생 시 호출
    formState: { errors }, // 폼 상태 객체 = errors
    watch, // 특정한 form 필드의 값을 실시간으로 사용
  } = useForm();

  // handleSubmit(funcA[, funcB]);
  //- funcA : 함수, 유효할 때 실행
  //- funcB : 선택, 유효하지 않을 때 실행

  const onValidSubmit = (data) => {
    console.log("onValid", data);
  };

  const onInValidSubmit = (err) => {
    console.log("onInValid", err);
  };

  console.log("watch", watch("username"));
  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>

      <form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해주세요",
            minLength: {
              message: "이름은 최소 두글자 이상 작성해주세요!",
              value: 2,
            },
          })}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요",
            validate: {
              useGmail: (email) => {
                return (
                  email.includes("gmail.com") || "gmaill로만 가입 가능합니다."
                );
              },
            },
          })}
        />
        <br />
        <button>Submit</button>
        <br />
        {/* 에러 메세지 */}
        {errors.username?.message}
        <br />
        {errors.email?.message}
        <br />
        <br />
      </form>
    </div>
  );
}
