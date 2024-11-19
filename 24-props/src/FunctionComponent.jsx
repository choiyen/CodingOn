import PropTypes from "prop-types"; //타입 지정을 위해 필요

// export default function FuntionComponent(props) {
//   return <div>{props.name}</div>;
// }
// export default function FuntionComponent({ name }) {
//   return <div>{name}</div>;
// }

// 기본값을 설정하는 방법 1 - 우선 순위 낮음
export default function FuntionComponent({ name = "홍길동" }) {
  const student = "길동";
  return <div>{name}</div>;
}

// 기본값을 설정하는 방법 2 - 우선순위 높음(단, 코드가 길어 잘 쓰지 않음)
FuntionComponent.defaultProps = {
  name: "철수",
};

FuntionComponent.propTypes = {
  name: PropTypes.number,
};
