import React from "react";
import { useForm } from "react-hook-form";

export default function Form2() {
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

  return (
    <div>
      <h1>react-hook-form 라이브러리 실습</h1>

      <form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름은 필수 항목입니다",
          })}
        />
        <br />
        <input
          type="text"
          placeholder="age"
          {...register("age", {
            required: "숫자를 입력해주세요",
            validate: {
              useAge: (age) => {
                return (
                  (isNaN(age) && age > 0) || "0 이상의 숫자만 입력 가능합니다."
                );
              },
            },
            // pattern: {
            //   value: /^[0-9]*$/,
            //   message: "0이상의 숫자만 입력 가능합니다",
            // },
          })}
        />
        <br />
        <button>Submit</button>
        <br />
        {/* 에러 메세지 */}
        {errors.username?.message}
        <br />
        {errors.age?.message}
        <br />
        <br />
      </form>
    </div>
  );
}
